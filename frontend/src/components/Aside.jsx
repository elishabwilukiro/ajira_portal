import { React } from 'react';
import { NavLink } from 'react-router-dom';
import kfcLogo from '../assets/images/kfc.png';

import { 
     FaPlusCircle, 
     FaUsers, 
     FaUserEdit, 
     FaTimes, 
     FaListAlt 
} from 'react-icons/fa';

const Aside = () => {

  const base = "flex item-center p-3 rounded-lg text-gray-700 hover:text-purple-700";   
  const active = "flex item-center p-3 rounded-lg text-gray-700 transition duration-200";   
  return (
    <>
          <aside>
               <div className='p-6 text-2xl font-bold border-b border-purple-200 text-purple-800 flex justify-between items-center'>
                    Talent Hub
               </div>
               <nav className='flex-grow p-4 space-y-2'>
                    <NavLink 
                         to={`/createJob`}
                         className={({ isActive }) => isActive ? active : base }
                    >
                         <FaPlusCircle className='w-6 h-6' />     
                         <span className='ml-3'>Create Job</span>     
                    </NavLink>
               </nav>

               <nav className='flex-grow p-4 space-y-2'>
                    <NavLink 
                         to={`/dashboard`}
                         className={({ isActive }) => isActive ? active : base }
                    >
                         <FaUsers className='w-6 h-6' /> 
                         <span className='ml-3'>View Applications</span>    
                    </NavLink>
               </nav>

               <nav className='flex-grow p-4 space-y-2'>
                    <NavLink 
                         to={`/manageJobs`}
                         className={({ isActive }) => isActive ? active : base }
                    >
                         <FaListAlt className='w-6 h-6' /> 
                         <span className='ml-3'>Manage Jobs</span>     
                    </NavLink>
               </nav>

               <nav className='flex-grow p-4 space-y-2'>
                    <NavLink 
                         to={`/editedProfile`}
                         className={({ isActive }) => isActive ? active : base }
                    >
                         <FaUserEdit className='w-6 h-6' /> 
                         <span className='ml-3'>Edit Profile</span>     
                    </NavLink>
               </nav>

               <div className="mt-10 mx-3 mb-3">
                    <div className="relative flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 group hover:border-purple-200 hover:shadow-sm transition-all duration-300">
                         
                         {/* Subtle background glow */}
                         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                         {/* Avatar */}
                         <div className="relative flex-shrink-0">
                         <img
                              className="w-8 h-8 rounded-lg object-cover shadow-sm ring-1 ring-purple-200"
                              src={kfcLogo}
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

          </aside>
    </>
  );
};

export default Aside;