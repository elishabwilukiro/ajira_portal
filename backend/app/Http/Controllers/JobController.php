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

    // Get Job Listings
    public function index(Request $request)
    {
        $query = JobListing::with(['description','companyLogo'])->latest('posted_date');  

        $perPage = in_array((int) $request->per_page, [10, 25, 50, 100]) ? (int) $request->per_page : 10;  

        if($request->filled('keyword')){
            $query->where(function($q) use ($request){
                $keyword = strtolower($request->keyword);
                $q->whereRaw('LOWER(title) LIKE ?', ['%'.$keyword.'%'])
                    ->orWhereRaw('LOWER(department) LIKE ?', ['%'.$keyword.'%']);
            });
        }  

        if($request->filled('location')){
            $query->where(function($q) use ($request){
                $location = strtolower($request->location);
                $q->whereRaw('LOWER(location) LIKE ?', ['%'.$location.'%'])
                    ->orWhereRaw('LOWER(location_type) LIKE ?', ['%'.$location.'%']);
            });
        }  

        if($request->filled('min_salary')){
            $query->where('min_salary', '>=', $request->min_salary);
        }

        if($request->filled('max_salary')){
            $query->where('max_salary', '<=', $request->max_salary);
        }

        if($request->filled('job_type')){
            $query->where('job_type', $request->job_type);
        }
        
        if($request->filled('location_type')){
            $types = explode(',', $request->location_type);
            $query->whereIn('location_type', $types);
        }
          
        $jobs = $query->paginate($perPage);

        $mapped = $jobs->getCollection()->map(function ($job) {
            return [
                'id'            => $job->id,
                'title'         => $job->title,
                'department'    => $job->department,
                'location'      => $job->location,
                'level'         => $job->level,
                'location_type' => $job->location_type,
                'job_type'      => $job->job_type,
                'posted_date'   => $job->posted_date?->format('Y-m-d'),
                'application_deadline' => $job->application_deadline?->format('Y-m-d'),
                'min_salary'    => $job->min_salary,
                'max_salary'    => $job->max_salary,
                'company_name'  => $job->company_name,
                'website'       => $job->website,
                'contact_person' => $job->contact_person,
                'company_email' => $job->company_email,
                'company_description' => $job->company_description,
                'key_role'      => $job->description ? $job->description->key_role : null,
                'responsibility' => $job->description ? $job->description->responsibility : null,
                'skill_and_experience' => $job->description ? $job->description->skill_and_experience : null,
                'company_logo_url' => $job->companyLogo ? asset('storage/' . $job->companyLogo->logo_path) : null,
            ];
        })->values();

        return response()->json([
            'status' => 'success',
            'data'  => $mapped,
            'meta' => [
                'current_page' => $jobs->currentPage(),
                'last_page' => $jobs->lastPage(),
                'per_page' => $jobs->perPage(),
                'total' => $jobs->total(),
            ],
        ]);
          
    }


    // Create Job
    public function store(Request $request){

        $rules = [
                'title' => 'required|string',
                'department' => 'required|string',
                'location' => 'required|string',
                'level' => 'required|string',
                'location_type' => 'required|in:remote,on-site,hybrid',
                'job_type' => 'required|in:Full-time,Part-time,Internship,Freelance',
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
                'skill_and_experience' => 'required|string',

                // Company logo
                'company_logo' => 'nullable|file|image|mimes:jpg,jpeg,png,webp|max:4048',
                'status',
                'archive',
            ];
            
        $validator = Validator::make($request->all(), $rules);

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
            'location_type' => $request->location_type,
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
            'skill_and_experience' => $request->skill_and_experience,
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
