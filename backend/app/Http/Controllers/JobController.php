<?php

namespace App\Http\Controllers;

use App\Models\CompanyLogo;
use App\Models\Description;
use App\Models\JobListing;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Contracts\Providers\Auth;

class JobController extends Controller
{

    // Create Job
    public function store(Request $request){

        $validator = Validator::make($request->all(),[
            'title' => 'required|string',
            'department' => 'required|string',
            'location' => 'required|string',
            'level' => 'required|string',
            'location_type' => 'required|in:remote,on-site,hybrid',
            'job_type' => 'required|in:Full-time,Part-time-Internship,Freelance',
            'application_deadline' => 'nullable|date',
            'min_salary' => 'required|numeric|min:0',
            'max_salary' => 'required|numeric|min:0|gte:min_salary',
            'company_name' => 'required|string',
            'website' => 'nullable|url|max:2048',
            'contact_person' => 'required|string',
            'company_email' => 'required|email',
            'company_description' => 'required|string',

            // Description
            'key_role' => 'required|string',
            'responsibility' => 'required|string',
            'skill_and_ experience' => 'required|string',

            // Company logo
            'company_logo' => 'nullable|file|image|mimes:jpg,jpeg,png,webp|max:4048',
            'status',
            'archive',
        ]);

        // Handle Validation Error
        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);   
        }

        // Save JobListing
        $jobListing = JobListing::create([
            'title'         => $request->title,
            'department'    => $request->department,
            'location'      => $request->location,
            'level'         => $request->level,
            'location_type' => $request->job_type,
            'job_type'      => $request->job_type,
            'application_deadline' => $request->application_deadline,
            'min_salary'    => $request->min_salary,
            'max_salary'    => $request->max_salary,
            'company_name'  => $request->company_name,
            'website'       => $request->website,
            'contact_person' => $request->contact_person,
            'company_email' => $request->company_email,
            'company_description' => $request->company_description,
            'key_role'      => $request->key_role,
            'responsibility' => $request->responsibility,
            'skill_and_ experience' => $request->experience,
            'company_logo'  => $request->company_logo,
            'posted_date'   => Carbon::now(),
            // 'user_id'       => Auth['api']->id()
            'user_id'       => 1
        ]);

        // Save Description
        $description = Description::create([
            'job_listing_id'=> $jobListing->id,
            'key_role'      => $request->key_role,
            'responsibility' => $request->responsibility,
            'skill_and_ experience' => $request->experience,
        ]);

        // Handle Logo If Exist
        $logo = null;
        if($request->hasFile('company_logo'))
        {
            $file = $request->file('company_logo');
            $originalName = $file->getClientOriginalName();
            $path = $file->store('company_logos','public');  
            
            $logo = CompanyLogo::create([
                'original_name' => $originalName,
                'logo_path'     => $path,
                'job_listing_id'=> $jobListing->id
            ]);
        }

        return response()->json([
            'status'    => 'success',
            'message'   => 'Job Listing created Successfully',
            'data'      => [
                    'job_listing'   => $jobListing,
                    'description'   => $description,
                    'company_logo'  => $logo,
                ],
        ], 201);
    }
}
