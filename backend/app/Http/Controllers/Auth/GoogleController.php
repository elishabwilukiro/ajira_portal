<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Google_Client;
use App\Models\UserImage;
use App\Models\User;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class GoogleController extends Controller
{
    public function googleLogin(Request $request)
    {
        $request->validate([
            'token' => 'required|string',
            'role' => 'required|in:admin,recruiter,user',
        ]);

        // Verify Google Token
        $client = new Google_Client(['client_id' => env('GOOGLE_CLIENT_ID')]);
        $payload = $client->verifyIdToken($request->token);

        if (!$payload){
            return response()->json([
                'error' => 'Invalid Google token'
            ], 401);
        }
        
        // Extract Google Login Info
        $email = $payload['email'];
        $googleId = $payload['sub'];
        $googleImage = $payload['picture'];
        $tagertRole = $request->role;

        // Find Google Id or Email
        $user =  User::where('google_id', $googleId)
            ->orWhere('email', $email)
            ->first();

        // Security Check
        if($user){
            if($user->role !== $tagertRole){
                return response()->json([
                    'error' => 'This account is registered as ' . $user->role . '. Please use the correct login information.'
                ], 403);
            }

            // Update Google Id if Not Set
            if(!$user->google_id){
                $user->update(['google_id' => $googleId]);
            }

        }  else {
            // Create New User If Not Found
            $nameParts = explode(' ', $payload['name'], 2);
            $user = User::create([
                'first_name' => $nameParts[0],
                'last_name' => $nameParts[1] ?? '',
                'email' => $email,
                'google_id' => $googleId,
                'role' => $tagertRole,
                // 'profile_image' => $googleImage,
                'password' => bcrypt(Str::random(24)),
                'status' => 0,
                'archive' => 0,
            ]);
        }

        // For Inactive Users, Return Error
        if($user->status !== 0 || $user->archive !== 0){
            return response()->json([
                'error' => 'Your account is deactivated. Please contact support.'
            ], 403);
        }

        // Save Image
        if($googleImage){
            $existingImage = UserImage::where('user_id', $user->id)->first();

            // Only update if image doesn't exist
            if(!$existingImage || str_starts_with($existingImage->image_path, 'http')){
                UserImage::updateOrCreate([
                    'user_id' => $user->id,
                    'image_path' => $googleImage
                ]);
            }
        }

        // Generate Token
        $token = JWTAuth::fromUser($user);

        // Get Cookie Settig From Config/Help
        $isProd = app()->environment('production');

        // Return Http Only
        return response()->json([
            'status' => 'success',
            'message' => 'Login Successfully',
            'user' => [
                'id'    => $user->id,
                'full_name' => $user->full_name,
                'first_name' => $user->first_name,
                'email' => $user->email,
                'role' => $user->role,
                'status' => $user->status,
                'archive' => $user->archive,
                'image' => str_starts_with(optional($user->image)->image_path, 'http') 
                ? optional($user->image)->image_path
                : ($user->image ? url('storage/'.$user->image->image_path) : null),
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
            'Lax',       // samesite Lax instead of strict
        );


    }
}
