

<!-- NavBar  part 1 -->
        <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                    
                        <span className="text-lg font-extrabold text-gray-900 group-hover:text-purple-600 transition duration-200 tracking-tight">
                            JobBoard
                        </span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <div className="hidden sm:flex items-center gap-2">
                         
                            <div className="flex items-center gap-3">
                              
                                    <NavLink to="#" className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-200'>
                                        Saved Jobs
                                    </NavLink>
                            
                              
                                    <NavLink to="#" className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-200'>
                                        Dashboard
                                    </NavLink>
                                

                                {/* Profile Dropdown */}
                                <div className=" relative " >
                                    <button
                                        
                                        className="flex items-center gap-2.5 pl-3 pr-1 py-1 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition duration-200 group"
                                    >
                                        <p className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition hidden md:block">
                                            Hi, Phanit
                                        </p>
                                        <img
                                            src={null}
                                            alt="Profile"
                                            referrerPolicy="no-referrer"
                                            className="h-8 w-8 rounded-lg object-cover border-2 border-gray-100"
                                        />
                                        {/* <svg className={`w-3.5 h-3.5 text-gray-400 transition duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg> */}

                                    </button>

                                    {/* Dropdown */}
                                        <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-2 overflow-hidden">
                                            {/* User info */}
                                            <div className="px-4 py-3 border-b border-gray-100">
                                                <p className="text-xs font-bold text-gray-800 truncate">Nit Kevin</p>
                                                <p className="text-xs text-gray-400 truncate">kevin@gmail.com</p>
                                            </div>

                                            <div className="py-1">
                                                <Link
                                                    to='#'
                                                   
                                                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                                                >
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    Manage Profile
                                                </Link>
                                            </div>

                                            <div className="border-t border-gray-100 pt-1">
                                                <button
                                                   
                                                    className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-500 font-semibold hover:bg-red-50 transition"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                            
                                </div>
                            </div>
                        
                            <div className="flex items-center gap-2">
                                <NavLink to="#" className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-200'>
                                    Recruiter Login
                                </NavLink>
                                <NavLink
                                    to="#"
                                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition duration-200 shadow-sm shadow-purple-200"
                                >
                                    Login
                                </NavLink>
                            </div>
                        
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        
                        className="sm:hidden p-2 rounded-xl text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition duration-200"
                    >
                         <FaTimes className="text-lg" />
                    </button>
                </div>

                {/* Mobile Menu */}
                    <div className="sm:hidden border-t border-gray-100 py-3 space-y-1">

                        {/* User info */}
                        
                            <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-purple-50 rounded-xl mx-1">
                                <img
                                    src={null}
                                    alt="Profile"
                                    referrerPolicy="no-referrer"
                                    className="h-10 w-10 rounded-xl object-cover border-2 border-white shadow-sm"
                                />
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-gray-800 truncate">Nit Kevin</p>
                                    <p className="text-xs text-gray-500 truncate">kevin@gmail.com</p>
                                </div>
                            </div>
                        

                       
                            <>
                               
                                    <NavLink to="#"  className="block text-gray-600 hover:bg-purple-50 hover:text-purple-600 px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200">
                                        Saved Jobs
                                    </NavLink>
                              
                              
                                    <NavLink to="#" className="block text-gray-600 hover:bg-purple-50 hover:text-purple-600 px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200">
                                        Dashboard
                                    </NavLink>
                            
                                <NavLink
                                    to='#'
                                    
                                    className="block text-gray-600 hover:bg-purple-50 hover:text-purple-600 px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200"
                                >
                                    Manage Profile
                                </NavLink>
                                <div className="pt-2 border-t border-gray-100 mt-2">
                                    <button
                                       
                                        className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition duration-200"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                      
                            <>
                                <NavLink to="/recruiterLogin"  className="block text-gray-600 hover:bg-purple-50 hover:text-purple-600 px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200">
                                    Recruiter Login
                                </NavLink>
                                <div className="px-1 pt-1">
                                    <NavLink
                                        to="/userLogin"
                                        
                                        className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm"
                                    >
                                        Login
                                    </NavLink>
                                </div>
                            </>
                    
                    </div>
            
            </nav>
        </div>




<!-- Hero Section  Part 2-->
<main>
      <div className="relative bg-gray-900 overflow-hidden h-auto md:h-[400px] flex items-center">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-20"
            src={jobCover}
            alt="People working in an office"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-gray-900/40 to-indigo-900/60" />

        <div className="relative max-w-7xl mx-auto py-10 px-4 sm:py-12 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
              Find Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Dream Job
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
              Explore thousands of listings from leading companies, all in one place.
            </p>
          </div>

          {/* Search form */}
          <form 
          
          className="max-w-3xl mx-auto bg-white p-3 rounded-2xl shadow-2xl shadow-purple-900/30">
            <div className="flex flex-col md:flex-row items-center gap-3">

              {/* Keyword */}
              <div className="flex-grow relative w-full md:w-auto">
                <label htmlFor="keyword" className="sr-only">Job Title or Keyword</label>
                <div className="relative border border-gray-200 rounded-xl focus-within:border-purple-400 hover:border-purple-400 transition duration-200">
                  <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    name="keyword"
                    placeholder="Job title or keyword..."
                    className="w-full pl-11 pr-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-0 placeholder-gray-400 rounded-xl"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="flex-grow relative w-full md:w-auto">
                <label htmlFor="location" className="sr-only">Location</label>
                <div className="relative border border-gray-200 rounded-xl focus-within:border-purple-400 hover:border-purple-400 transition duration-200">
                  <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    name="location"
                    placeholder="City or remote..."
                    className="w-full pl-11 pr-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-0 placeholder-gray-400 rounded-xl"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl px-6 py-3 text-sm font-semibold transition duration-200 shadow-md shadow-purple-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Jobs
              </button>

            </div>
          </form>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { label: 'Jobs Posted', value: '1,200+' },
              { label: 'Companies', value: '300+' },
              { label: 'Hired This Month', value: '850+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>


<!-- TrustedComapny Page  Part 3-->
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .header-animate {
          animation: fadeSlideUp 0.6s ease both;
        }
        .header-animate:nth-child(1) { animation-delay: 0.1s; }
        .header-animate:nth-child(2) { animation-delay: 0.25s; }
        .header-animate:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="header-animate text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">
            Our Partners
          </p>
          <h2 className="header-animate text-2xl font-extrabold text-gray-800">
            Trusted by Leading Companies
          </h2>
          <p className="header-animate text-sm text-gray-400 mt-1">
            Join thousands of professionals hired through our platform
          </p>
        </div>

        {/* Fade edges */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
               style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
               style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />

          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="marquee-track">
              {duplicated.map(({ src, alt }, i) => (
                <div
                  key={`${alt}-${i}`}
                  className="mx-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 hover:scale-110 transition-all duration-300 p-4 flex items-center justify-center group flex-shrink-0"
                  style={{ width: '96px', height: '72px' }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>


<!-- Listing Companies  Part 4-->
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="w-[95%] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* job filters  */}
                    <FilteredListings />


                    <main className="lg:col-span-3">
                       {/* Header row */}
                        <div className="flex items-center justify-between mt-4 mb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800">Latest jobs</h2>
                                <p className="text-lg text-gray-600">Filter. Tailor. Apply. Succeed.</p>
                            </div>

                            {/* Per page selector */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-sm text-gray-500 whitespace-nowrap">Show:</span>
                                <select
                                    
                                    className="text-sm border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:border-purple-400 hover:border-purple-400 transition duration-200"
                                >
                                    <option value=''>9 / page</option>
                                    <option value=''>18 / page</option>
                                    <option value=''>50 / page</option>
                                    <option value=''>100 / page</option>
                                </select>
                            </div>
                        </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {/* Job Cards */}
                                <JobCard  />
                            
                            </div>
                    </main>

                </div>
            </div>
        </section>



<!-- Filtered Listing Part 5  -->
        <aside className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:h-fit lg:sticky lg:top-8">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
            <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
            </div>
            <h2 className="text-base font-bold text-gray-800">Filter Jobs</h2>
        </div>

        <div className="space-y-4 mb-6">

            {/* Keyword */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Keyword
                </label>
                <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Title or company..."
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-0 hover:border-purple-400 transition duration-200"
                    />
                </div>
            </div>

            {/* Location */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Location
                </label>
                <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="City or remote..."
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-0 hover:border-purple-400 transition duration-200"
                    />
                </div>
            </div>

            {/* Min Salary */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Min. Salary
                </label>
                <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <select 

                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-0 hover:border-purple-400 transition duration-200" >
                            <option value="">Any Amount</option>
                            <option value="">$40,000+</option>
                            <option value="">$60,000+</option>
                            <option value="">$80,000+</option>
                            <option value="">$100,000+</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Job Type */}
        
            <div className="border-t border-gray-100 pt-5 mb-5">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Job Type</h3>
            <div className="space-y-2">
                {['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'].map((label) => (
                <label key={label} className="flex items-center gap-2.5 group cursor-pointer">
                    <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-purple-400 transition duration-200 flex items-center justify-center flex-shrink-0">
                    <input type="checkbox" className="sr-only" />
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition duration-200">{label}</span>
                </label>
                ))}
            </div>
            </div>

        {/* Work Mode */}
        

            <div className="border-t border-gray-100 pt-5 mb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Work Mode</h3>
                <div className="space-y-2">
                    {['remote', 'hybrid', 'on-site'].map((label) => (
                    <label key={label} className="flex items-center gap-2.5 group cursor-pointer">
                        <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-purple-400 transition duration-200 flex items-center justify-center flex-shrink-0">
                        <input type="checkbox" className="sr-only" />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 capitalize transition duration-200">{label}</span>
                    </label>
                    ))}
                </div>
            </div>



        {/* Clear Button */}
        <button
            
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2.5 rounded-xl font-semibold text-sm transition duration-200 shadow-md shadow-purple-100 flex items-center justify-center gap-2"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Clear Filters
        </button>
    </aside>



<!-- Job Card part 6 -->

    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300 p-5 flex flex-col justify-between">

            {/* Top — Logo + Title */}
            <div>
                <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center overflow-hidden">
                       
                            <img
                                src={null}
                                alt=''
                                className="w-full h-full object-contain p-1"
                               
                            />
                        
                            <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        
                    </div>

                    {/* Title + Company */}
                    <div className="min-w-0 flex-1">
                        <h2 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-purple-700 transition duration-200">
                           Senior Full Stack
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5 truncate">Google Inc</p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    Google Inc is  atech leading company
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Romote
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        $1000 - $2000
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Senior
                    </span>
                </div>
            </div>

            {/* Bottom — divider + button */}
            <div className="border-t border-gray-100 pt-4">
                <NavLink
                    to='#'
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2.5 rounded-xl font-semibold text-sm transition duration-200 shadow-md shadow-purple-100 text-center inline-block"
                >
                    View & Apply
                </NavLink>
            </div>

        </div>



<!-- Footer Part 7 -->
    <footer className="bg-gray-900 border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm">JobBoard</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            ©  JobBoard. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-purple-400 transition duration-200">Privacy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-purple-400 transition duration-200">Terms</a>
            <a href="#" className="text-xs text-gray-500 hover:text-purple-400 transition duration-200">Contact</a>
          </div>

        </div>
      </div>
    </footer>


<!-- Job Detail Page Part 8 -->

            <div className="min-h-screen bg-white">
                <div className="container mx-auto px-4 py-8 lg:px-10 lg:py-10 max-w-7xl">

                    {/* ── Hero Header ─────────────────────────────────────── */}
                    <header className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-2xl shadow-xl shadow-purple-200 mb-8 overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white rounded-full" />
                            <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white rounded-full" />
                        </div>

                        <div className="relative p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            {/* Left — Logo + Info */}
                            <div className="flex items-start gap-5">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 p-2">
                                    
                                        <div className="w-full h-full bg-purple-100 rounded-xl flex items-center justify-center">
                                            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                    
                                </div>

                                <div>
                                    <h1 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">Senior Full Stack Developer</h1>
                                    <p className="text-purple-200 font-semibold mt-1">Google Inc</p>

                                    {/* Tags */}
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                             Remote
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                             Remote
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                             Senior
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right — Apply button */}
                            <div className="flex-shrink-0 w-full lg:w-auto">
                                    <button 
                                        className="w-full lg:w-auto px-8 py-3 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Apply Now
                                    </button>
                                
                            </div>
                        </div>
                    </header>

                    {/* ── Content Grid ────────────────────────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main */}
                        <main className="lg:col-span-2 space-y-6">

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="border-l-4 border-purple-500 px-6 py-5">
                                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <span className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        About The Role
                                    </h2>
                                </div>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed"> Google is  giant tech company </p>
                                </div>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="border-l-4 border-indigo-500 px-6 py-5">
                                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <span className="w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </span>
                                        Key Responsibilities
                                    </h2>
                                </div>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line"> Must have Bacjelor Degree </p>
                                </div>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="border-l-4 border-violet-500 px-6 py-5">
                                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <span className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </span>
                                        Skills & Experience Required
                                    </h2>
                                </div>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line"> Skill and Experiences</p>
                                </div>
                            </section>
                        </main>

                        {/* Sidebar */}
                        <aside className="space-y-6">

                            {/* Quick Facts */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                                    <h3 className="text-base font-bold text-gray-800">Job Quick Facts</h3>
                                </div>
                                <div className="p-6 space-y-4">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium">Salary</span>
                                        </div>
                                        <span className="text-sm font-bold text-purple-700">
                                            $100000 – $150000/yr
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium">Level</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-800">Senior</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium">Posted</span>
                                        </div>
                                        <span>2 days ago</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium">Deadline</span>
                                        </div>
                                        <span className="text-sm font-bold text-red-600">
                                            20.05.2026
                                        </span>
                                    </div>
                                </div>

                                {/* Apply CTA inside sidebar */}
                               
                                    <div className="px-6 pb-6">
                                        <button 
                                            
                                            className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition shadow-md shadow-purple-200"
                                        >
                                            Apply for this Job
                                        </button>
                                    </div>
                                
                            </div>

                            {/* About Company */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                                    <h3 className="text-base font-bold text-gray-800">About Google Inc</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-600 leading-relaxed">Google is a giant tech company</p>
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>


<!-- AppliedModal Page Part 9 -->

    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-6 relative">
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl leading-tight">Job Application</h2>
              <p className="text-white/70 text-sm truncate max-w-xs">Senior Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto max-h-[70vh]">
          <form  className="space-y-6">

            {/* Personal Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Personal Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* input  */}

                {/* input  */}

                <div className="md:col-span-2">
                  {/* input  */}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Resume & Links */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Resume & Links</h3>
              </div>

              {/* Custom file upload */}
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  Resume <span class="text-red-400">*</span>
                  <span class="text-gray-400 font-normal ml-1">(PDF only, max 10MB)</span>
                </label>

                <label class="flex items-center gap-3 border-2 border-dashed border-gray-200 hover:border-violet-300 hover:bg-gray-50 rounded-xl p-4 cursor-pointer transition">
                  <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm text-gray-500">Click to upload your resume</p>
                    <p class="text-xs text-gray-400 mt-0.5">PDF format only</p>
                  </div>
                  <input type="file" name="resume" accept=".pdf" class="hidden" />
                </label>
              </div>

              {/* input  */}

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition shadow-lg shadow-violet-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Submit Application
            </button>

          </form>
        </div>
      </div>
    </div>



<!-- aside profile Part 10  -->
            <div className="mt-10 mx-3 mb-3">
                <div className="relative flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 group hover:border-purple-200 hover:shadow-sm transition-all duration-300">
                    
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                    <img
                        className="w-8 h-8 rounded-lg object-cover shadow-sm ring-1 ring-purple-200"
                        src={null}
                        referrerPolicy="no-referrer"
                        alt='image'
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full shadow-sm" />
                    </div>

                    {/* User Info */}
                    <div className="flex-1 min-w-0 relative z-10">
                    <p className="text-xs font-semibold text-gray-800 truncate leading-none mb-0.5">Virak</p>
                    <p className="text-[10px] text-gray-400 truncate leading-none">virak@gmail.com</p>
                    </div>

                    {/* Actions — always visible but subtle */}
                    <div className="relative z-10 flex items-center gap-0.5 flex-shrink-0">
                    <NavLink
                        to="/editedProfile"
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-purple-300 hover:text-purple-600 hover:bg-white hover:shadow-sm transition-all duration-150"
                        title="Edit Profile"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
                        </svg>
                    </NavLink>

                    <button
                        
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-purple-300 hover:text-red-500 hover:bg-white hover:shadow-sm transition-all duration-150"
                        title="Logout"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                        </svg>
                    </button>
                    </div>
                </div>
            </div>

<!-- icon part 11  -->
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>

<!-- View Application Part 12  -->
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
            <header className="mb-6 sm:mb-8 pb-4 border-b border-gray-300">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    Application Pipeline
                </h1>
            </header>
            <section className="content-section">

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <>
                        {/* Desktop Table */}
                        <div className="hidden sm:block overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Applied For</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    
                                        <tr  className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    
                                                        <img src={null} alt="company" className="h-8 w-8 rounded-full object-cover border border-gray-200" />
                                                    
                                                    <span className="text-sm font-medium text-gray-900">
                                                        Nit Virak
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Full Stack Developer</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">virak@gmail.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09.02.2026</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                
                                                    <a
                                                       
                                                        
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Download
                                                    </a>
                                                    
                                                
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800`}>
                                                    Applied
                                                </span>
                                            </td>
                                            
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    Applied
                                                </td>
                                            
                                        </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="sm:hidden space-y-4">
                            
                                <div  className="border border-gray-200 rounded-lg p-4 shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            
                                                <img src={null} alt="company" className="h-8 w-8 rounded-full object-cover border border-gray-200" />
                                            
                                            <p className="text-lg font-bold text-gray-900">Nit Virak</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800`}>
                                                Applied
                                            </span>
                                           
                                        </div>
                                    </div>
                                    <div className="text-sm space-y-1 text-gray-600">
                                        <p><span className="font-medium text-gray-800">Job:</span> Full Stack Developer</p>
                                        <p><span className="font-medium text-gray-800">Email:</span> virak@gmail.com</p>
                                        <p><span className="font-medium text-gray-800">Applied:</span> 30.06.2026</p>
                                    </div>
                                    <div className="mt-4">
                                       
                                            <a href={null} className="text-indigo-600 hover:text-indigo-900 flex items-center text-sm font-medium gap-1" download>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                Download Resume
                                            </a>
                                          
                                    
                                    </div>
                                </div>
                            
                        </div>
                    </>

                </div>
            </section>
        </main>


<!-- Create Job Part 13  -->
            <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
                <header className="mb-6 sm:mb-8 pb-4 border-b border-gray-300">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        Create New Job
                    </h1>
                </header>

              <section className="content-section">

                    <form  className="bg-white p-4 sm:p-8 rounded-xl shadow-lg space-y-8">

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">Job Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <TextInput 
                                label="Job Title"
                                name="title"
                                placeholder="e.g., Senior Frontend Developer"
                                required={true}
                            />
                            <SelectInput
                                label="Department"
                                name="department"
                                required={true}
                                options={[
                                    { value: "Administration", label: "Administration" },
                                    { value: "Customer Service", label: "Customer Service" },
                                    { value: "Design", label: "Design" },
                                    { value: "Engineering", label: "Engineering" },
                                    { value: "Finance", label: "Finance" },
                                    { value: "Human Resources", label: "Human Resources" },
                                    { value: "Information Technology", label: "Information Technology" },
                                    { value: "Legal", label: "Legal" },
                                    { value: "Marketing", label: "Marketing" },
                                    { value: "Operations", label: "Operations" },
                                    { value: "Product", label: "Product" },
                                    { value: "Research & Development", label: "Research & Development" },
                                    { value: "Sales", label: "Sales" },
                                ]}
                            />
                            <SelectInput
                                label="Job Level"
                                name="level"
                                required={true}
                                options={[
                                    { value: "intern", label: "Intern" },
                                    { value: "junior", label: "Junior" },
                                    { value: "mid", label: "Mid" },
                                    { value: "senior", label: "Senior" },
                                    { value: "lead", label: "Lead" },
                                    { value: "manager", label: "Manager" },
                                ]}
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">Job Description Details</h3>
                        <div className="space-y-6">

                            <TextAreaInput
                                label="Key Role / Summary"
                                name="key_role"
                                placeholder="A brief summary of the position and its impact."
                                rows={3}
                                required={true}
                            />

                            <TextAreaInput
                                label="Responsibilities"
                                name="responsibility"
                                placeholder="List the primary day-to-day duties and deliverables (e.g., Develop new features, Collaborate with design team, etc.)"
                                rows={6}
                                required={true}
                            />

                            <TextAreaInput
                                label="Skills & Experience"
                                name="skill_and_experience" 
                                placeholder="List required qualifications, technical skills, and years of experience (e.g., 5+ years with React, Proficient in Tailwind CSS, Bachelor's degree, etc.)"
                                rows={6}
                                required={true}
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">Location, Salary & Schedule</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                            <TextInput 
                                label="Location"
                                type="text" 
                                name="location" 
                                placeholder="City, State, or Country" 
                                required={true}
                            />

                            <SelectInput
                                label="Work Setup"
                                name="location_type" 
                                required={true}
                                options={[
                                    { value: "on-site", label: "On-site" },
                                    { value: "remote", label: "Remote" },
                                    { value: "hybrid", label: "Hybrid" },
                                ]}
                            />

                            <SelectInput
                                label="Job Type "
                                name="job_type" 
                                
                                options={[
                                    { value: "Full-time", label: "Full-time" },
                                    { value: "Part-time", label: "Part-time" },
                                    { value: "Contract", label: "Contract" },
                                    { value: "Internship", label: "Internship" },
                                    { value: "Freelance", label: "Freelance" },
                                ]}
                            />

                            <TextInput 
                                label="Application Deadline"
                                type="date" 
                                name="application_deadline" 
                                required={true}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <TextInput 
                                label="Minimum Salary"
                                type="number" 
                                name="min_salary" 
                                placeholder="70000" 
                                min="0" 
                                required={true}
                            />

                            <TextInput 
                                label="Maximum Salary"
                                type="number" 
                                name="max_salary" 
                                placeholder="95000" 
                                min="0" 
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">Company & Contact Info</h3>
                        <div className="grid grid-cols-1 gap-6">

                             <TextAreaInput
                                label="Company Description"
                                name="company_description"
                                placeholder="Briefly describe your company, its mission, and culture." 
                                rows={4}
                                required={true}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <TextInput 
                                label="Company Name "
                                type="text" 
                                name="company_name" 
                                placeholder="e.g., Microsoft, Google, etc." 
                                required={true}
                            />

                             <TextInput 
                                label="Company Website"
                                type="url" 
                                name="website" 
                                placeholder="https://www.company.com" 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                             <TextInput 
                                label="Contact Person (Hiring Manager) "
                                type="text" 
                                name="contact_person" 
                                placeholder="Name or HR Contact" 
                                required={true}
                            />
                             <TextInput 
                                label="Company Email"
                                type="email" 
                                name="company_email" 
                                placeholder="hr@company.com" 
                                required={true}
                            />

                             <TextInput 
                                label="Company Logo"
                                type="file" 
                                name="company_logo" 
                                
                                accept="image/*" 
                                required={true}
                            />
                        </div>

                        <div className="flex justify-end pt-4 border-t border-gray-200">
                            <button
                                type="submit"
                                className="px-4 py-2 sm:px-8 sm:py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-150 shadow-lg focus:outline-none flex items-center justify-center space-x-2"
                                
                                >
                                
                                
                                    <>
                                    <FaCloudUploadAlt className="w-5 h-5" />
                                    <span>Post Job Now</span>
                                    </>
                               
                            </button>
                        </div>
                    </form>
                </section>
            </main>


<!-- Managed Job Part 14  -->
                <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
                    <header className="mb-6 sm:mb-8 pb-4 border-b border-gray-300">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                            Manage Jobs
                        </h1>
                    </header>
                    <section className="content-section">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                        

                            <div className="hidden sm:block overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-white">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Open</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                                <tr >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Full Stack Developer</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Information Technology</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Remote</td>
                                                    <td className="px-6 py-4">
            
                                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                                                            Active
                                                            </span>
                                                       
                                                    </td>

                                                    <td className="px-6 py-4 text-sm text-center flex justify-center items-center space-x-4">
                                                        {/* Edit Icon */}
                                                        <NavLink to='/editJob' className="text-blue-600 hover:text-blue-900">
                                                            <FaEdit size={18} />
                                                        </NavLink>

                                                        {/* Delete Icon */}
                                                        <button
                                                            className="text-red-600 hover:text-red-900"
                                                            >
                                                            <FaTrash size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                        
                                    </tbody>
                                </table>
                                
                            </div>
                                <div className="sm:hidden space-y-4">
                                    
                                        <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
                                            <div className="flex justify-between items-start mb-2">
                                                <p className="text-lg font-bold text-gray-900">Full Stack Developer</p>
                                                <span className="px-2 py-1 rounded text-xs  bg-green-100 text-green-700"
                                                        
                                                >
                                                    Active
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium text-gray-800">Dept:</span> Information Technology
                                                <span className="text-gray-500"> Remote</span>
                                            </p>
                                            <div className="flex justify-end space-x-4 pt-2 border-t border-gray-100 mt-3">
                                                <NavLink to='/editJob' className="text-blue-600 hover:text-blue-900" title="Edit">
                                                    <FaEdit size={18} />
                                                </NavLink>
                                                <button
                                                    className="text-red-600 hover:text-red-900"
                                                    title="Delete"
                                                >
                                                    <FaTrash size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    
                                </div>

                        </div>
                    </section>
                </main>


<!-- Edit Profile Part 15 -->

        <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
                <header className="mb-6 sm:mb-8 pb-4 border-b border-gray-300">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        Edit Profile & Account Settings
                    </h1>
                </header>

                <section  className="content-section">
               

                    <form  className="bg-white p-8 rounded-xl shadow-lg space-y-8">

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4">Personal Information</h3>
                            
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            
                            <TextInput 
                                label='First Name'
                                type="text"
                                name="first_name"
                                required={true}
                            />

                            <TextInput 
                                label='Last Name'
                                type="text"
                                name="last_name"
                                required={true}
                            />
                            <div>
                                <TextInput 
                                label='Email Address'
                                type="email"
                                name="email"
                                required={true}
                                />
                                <p className="mt-1 text-xs text-gray-500">Email address cannot be changed here.</p>
                            </div>

                            <div className="max-w-md">
                                <label  className="block text-sm font-medium text-gray-700">Profile Photo</label>
                                <div className="flex items-center space-x-4 mt-2">
                                    
                                        <img 
                                            src={kfcLogo} 
                                            alt="Profile" 
                                            referrerPolicy="no-referrer" 
                                            className="w-16 h-16 rounded-full ring-2 ring-purple-400 bg-purple-100 flex items-center justify-center text-purple-600 text-xl font-bold"/>
                                   
                                    <input 
                                        ref={null}
                                        type="file" 
                                        accept="image/*" 
                                        className="block w-full text-sm border-purple-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer focus:outline-none" />
                                </div>
                            </div>                     
                        </div>

                        <div className="flex justify-end pt-2 border-t border-gray-200">
                            <button 
                                type="submit" 
                                className="px-5 py-2 text-base md:px-6 md:py-2.5 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-150 shadow-lg">
                                <i className="fa-solid fa-save mr-2"></i> Save Changes
                            </button>
                        </div>
                    </form>
                </section>

                
            </main>


<!-- User Profile Part 16  -->
        <aside className="lg:w-1/3 w-full px-4 sm:px-6 lg:px-8">
            <div className="lg:sticky lg:top-8 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Edit Your Profile </h3>
                <form  >

                    <TextInput
                        label='Full Name'
                        type='text'
                        name="full_name"
                        required={true}
                    />

                    <div>
                        <TextInput
                            label='Email Address'
                            type='email'
                            name="email"
                            required={true}
                            disabled={true}
                        />
                        <p className="mt-1 text-xs text-gray-400 flex items-center gap-1">
                            <i className="fa-solid fa-lock text-[10px]" />
                            Email address cannot be updated
                        </p>
                    </div>


                    <div className="max-w-md mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                            {/* Avatar */}
                            <div className="shrink-0">
                                <img
                                    src={kfcLogo}
                                    alt="Profile"
                                    referrerPolicy="no-referrer"
                                    className="w-16 h-16 rounded-full    object-cover bg-purple-100"
                                />
                            </div>

                            {/* File Input */}
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500 mb-1">JPG, PNG, GIF or WEBP · Max 2MB</p>
                                <input
                                    type="file" 
                                    accept="image/*"
                                    className="block w-full text-sm text-gray-500
                                file:mr-3 file:py-1.5 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-purple-100 file:text-purple-700
                                hover:file:bg-purple-200
                                file:transition file:duration-150
                                cursor-pointer focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-4 w-full bg-purple-600 text-white py-2.5 rounded-xl font-semibold
                            hover:bg-purple-700 active:scale-95
                            transition duration-150 shadow-md"
                        >
                             Save Profile
                        </button>
                    </div>


                </form>
            </div>
        </aside>

<!-- Applied Job Listings Part 17 -->
        <section className="lg:w-2/3 w-full bg-white p-6 rounded-xl shadow-lg px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Your Saved Jobs  </h3>
            
                <ul className="divide-y divide-gray-200">
                    
                        <li className="py-4 flex items-center justify-between hover:bg-gray-50 transition duration-100 rounded-md -mx-2 px-2">
                            <div className="flex items-center min-w-0 flex-1">
                                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-indigo-100 p-2 mr-4 flex items-center justify-center">
                                    
                                        
                                            <img
                                                src={kfcLogo}
                                                alt="Default Logo"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                 
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-lg font-semibold text-gray-900 truncate">Full Stack Developer</p>
                                    <p className="text-sm text-gray-500 truncate">Google Inc · Remote</p>
                                </div>
                            </div>

                            <div className="hidden sm:block min-w-min mx-4">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Active</span>
                                
                            </div>

                            <div className="flex items-center gap-3">
                                <NavLink to='/jobDetail' className="text-indigo-600 hover:text-indigo-800 text-sm font-medium whitespace-nowrap">View Job</NavLink>
                                <button 
                                    className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition" title="Delete Job">
                                     <Trash2 className="w-5 h-5" />
                                    
                                </button>
                            </div>
                        </li>

                </ul>
           
        </section>

<!-- Recruiter Login  Part 18-->
    <div className="flex-grow flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="p-8 sm:p-10">

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Recruiter Login
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Access your recruiter dashboard
          </p>

          {/* Google Login */}

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* Manual Login Form */}
          <form  className="space-y-5">

            {/* Email */}

            <TextInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email"
              required={true}
            />

            {/* Password */}
            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required={true}
            />

            {/* Submit Button */}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-sm shadow-purple-200"
            >
              Log In as Recruiter
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <NavLink to='/recruiterSignup' className="text-purple-600 font-medium cursor-pointer hover:underline">
              Register here
            </NavLink>
          </p>

        </div>
      </div>
    </div>

<!-- Recruiter Signup Part 19  -->
    <main className="flex-grow flex justify-center items-center p-4 ">
        
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden border border-gray-100"> 

            <div className="p-8 sm:p-10">
                <h2 className="text-2xl font-semibold mb-8 text-gray-900 text-center">Recruiter Create Account</h2>

                <form   className="space-y-6">
                    
                    <div className="flex space-x-4">
                        <TextInput 
                        label="First Name"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required={true}
                        
                        />

                        <TextInput 
                        label="Last Name"
                        type="text"
                        name="lastName" 
                        placeholder="Last Name"
                        required={true}
                        
                        />
                    </div>     

                        <TextInput 
                        label="Email"
                        type="email"
                        name="email" 
                        placeholder="Enter your email"
                        required={true}
                        
                        />

                    <TextInput 
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        required={true}
                        
                        />

                    <TextInput 
                        label="Confirm Password"
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm your password"
                        required={true}
                        
                        />
                    
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-sm shadow-purple-200"
                        >
                        Sign Up
                    </button>
                </form>
                
                <div className="mt-6 text-sm flex justify-center">
                    <NavLink to="/recruiterLogin" className="text-blue-600 hover:text-blue-700 transition duration-150">Back to Login</NavLink>
                </div>
            </div>
        </div>
    </main>


<!-- API Part 20  -->
    php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"


<!-- Filter Listing part 21  -->


                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>


<!-- filter part 22 -->
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>


<!-- expired Part 23 -->

                                                                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                                                                        Expired
                                                                    </span>



<!-- loading return true part 24  -->
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
                <p className="text-gray-500 text-sm">Loading job details...</p>
            </div>
        </div> 

<!-- already applied part 25  -->
                                    <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-100                               px-6 py-3 rounded-xl font-semibold">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Already Applied
                                    </div>

<!-- resume part 26  -->
                <label className={`flex items-center gap-3 border-2 border-dashed rounded-xl p-4 cursor-pointer transition
                  ${resumeName ? 'border-violet-400 bg-violet-50' : 'border-gray-200 hover:border-violet-300 hover:bg-gray-50'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                    ${resumeName ? 'bg-violet-100' : 'bg-gray-100'}`}>
                    <svg className={`w-5 h-5 ${resumeName ? 'text-violet-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    {resumeName
                      ? <p className="text-sm font-medium text-violet-700 truncate">{resumeName}</p>
                      : <p className="text-sm text-gray-500">Click to upload your resume</p>
                    }
                    {!resumeName && <p className="text-xs text-gray-400 mt-0.5">PDF format only</p>}
                  </div>
                  <input type="file" name="resume" accept=".pdf" required onChange={handleChange} className="hidden" />
                </label>

<!-- authLoading Part 27  -->
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-10 text-center">
          <div className="w-10 h-10 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 text-sm font-medium">Verifying your session...</p>
        </div>
      </div>


<!-- Not looged in Part 28  -->
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-8 text-center">
          <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Login Required</h2>
          <p className="text-gray-500 text-sm mb-6">You must be logged in to apply for this job.</p>
          <button onClick={onClose} className="px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition">
            Close
          </button>
        </div>
      </div>



<!-- Wrong Role Part 29  -->
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-8 text-center">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-500 text-sm mb-1">Only <span className="font-semibold text-violet-600">job seekers</span> can apply.</p>
          <p className="text-xs text-gray-400 mb-6">Your role: <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">{currentUser.role}</span></p>
          <button onClick={onClose} className="px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition">
            Close
          </button>
        </div>
      </div>


 <!-- Applied Job Listing  Part 30 -->
                <div className="text-center py-12 text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v3" />
                    </svg>
                    <p className="text-sm">You haven't applied to any jobs yet.</p>
                    <Link to="/" className="mt-3 inline-block text-indigo-600 hover:underline text-sm font-medium">
                        Browse Jobs →
                    </Link>
                </div>


<!-- View Application Part 31  -->

                {loading && (
                        <div className="flex justify-center items-center py-16">
                            <svg className="animate-spin h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                        </div>
                    )}

                    {!loading && error && (
                        <div className="text-center py-12 text-red-500 font-medium">{error}</div>
                    )}

                    {!loading && !error && applications.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <svg className="mx-auto h-12 w-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"/>
                            </svg>
                            <p>No applications yet.</p>
                        </div>
                    )}


<!-- Dropdown Part 32  --> 
        <div className="relative inline-block text-left" ref={ref}>
            <button
                onClick={() => setOpen(prev => !prev)}
                disabled={isLoading}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
                {isLoading
                    ? <svg className="animate-spin h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                    : <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                }
            </button>

            {open && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-1">
                        <button
                            onClick={() => { onStatusUpdate(app.id, 'accepted'); setOpen(false) }}
                            className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-green-700 hover:bg-green-50 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Accept
                        </button>
                        <button
                            onClick={() => { onStatusUpdate(app.id, 'rejected'); setOpen(false) }}
                            className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            Reject
                        </button>
                    </div>
                </div>
            )}
        </div>