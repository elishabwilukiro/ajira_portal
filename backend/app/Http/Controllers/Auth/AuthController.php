<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $rules = [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirm',
            'role' => 'required|string|in:admin,recruiter,user',
        ];

        $validator = $request->validator($request->all(), $rules);

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ],400);
        }


        // Create New User
        $user = User::create([
            'first_name' =>  $request->first_name,
            'last_name' =>  $request->last_name,
            'email'     =>  $request->email,
            'password' =>  Hash::make($request->password),
            'role'     =>  $request->role
        ]);

        // Generate Token
        $token = JWTAuth::fromUser($user);

        $cookie = cookie(
            'auth_token', // name
            $token,      // token
            1440,        // expire in 1 day (60*24 Min)
            '/',         // path
            null,        // domain
            false,       // seecure = false for localhost
            true,        // http-only
            false,          
            'Lax',       // Samesite (Essential for CSRF Protection/Auth)
        );

        return response()->json([
            'status' => 201,
            'message' => 'User Registered Successfully',
            'data'  => $user,
        ],201)->withCookie($cookie);
    }

    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|string|email',
            'password' => 'required|string|min:6|confirm',
            'role' => 'required|string|in:admin,recruiter,user',
        ];

        $validator = $request->validator($request->all(), $rules);

        $user = User::where('email', $request->email)->first();

        if($user || !Hash::check($request->password, $user->password)){
            return response()->json([
                'status' => 401,
                'message' => 'Invalid Credentials'
            ],401);
        }

        // For Incorrect User Role, Return Error
        if ($user->role !== $request->role) {
            return response()->json([
                'error' => 'This account is registered as ' . $user->role . '. Please use the correct login information.'
            ], 403);
        }

        // For Inactive Users, Return Error
        if($user->status !== 0 || $user->archive !== 0){
            return response()->json([
                'error' => 'Your account is deactivated. Please contact support.'
            ], 403);
        }

        // Generate Token
        $token = JWTAuth::fromUser($user);

        return response()->json([
            'status' => 201,
            'message' => 'Login Successfully',
            'data'  => [
                'full_name' => $user->full_name,
                'first_name' => $user->first_name,
                'email' => $user->email,
                'role' => $user->role,
            ]
        ])->cookie(
            'auth_token', // name
            $token,      // token
            1440,        // expire in 1 day (60*24 Min)
            '/',         // path
            null,        // domain
            false,       // seecure = false for localhost
            true,        // http-only
            false,          
            'Lax',       // Samesite (Essential for CSRF Protection/Auth)
        );
    }


    public function me()
    {
        try{
            $user = JWTAuth::parseToken()->authenticate();                
            return response()->json([
                'status' => 'success',
                'message' => 'Login Successfully',
                'user' => [
                    'full_name' => $user->full_name,
                    'first_name' => $user->first_name,
                    'email' => $user->email,
                    'role' => $user->role,
                    'image' => str_starts_with(optional($user->image)->image_path, 'http') 
                    ? optional($user->image)->image_path
                    : ($user->image ? url('storage/'.$user->image->image_path) : null),
                ]
            ]);

        }catch(\Exception $e){
            return response()->json(['error' => 'Unauthorized'],401);
        }
    }

    public function logout(Request $request)
    {
        try {

            // Invalid JWT-Token
            Auth::logout();
            return response()->json([
                'message' => 'Logout Successfully'
            ])->withCookie(cookie()->forget('auth_token'));

        } catch (\Exception $e) {
            return response()->json(['error' => 'Could Not Logged Out'],500);           
        }
    }


}
