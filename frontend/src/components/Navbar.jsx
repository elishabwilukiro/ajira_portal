import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes} from 'react-icons/fa';
import { useEffect, useState, useRef } from "react";
import kfcLogo from '../assets/images/kfc.png';
import defaultLogo from "../assets/images/default_logo.jpg";
import { googleLogout } from '@react-oauth/google';
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const [isOpen, setIsOpen] = useState(false);
     const dropdownRef = useRef(null);
     const {user, loading, logout} = useAuth();   // Fetching user data from AuthContext
     const navigate = useNavigate();

     const base = "text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition duration-200";
     const active = "text-gray-600 px-3 py-2 text-sm font-medium";

     const baseMobile = "block text-gray-600 hover:bg-purple-50 hover:text-purple-600 px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200";
     const activeMobile = "block text-gray-600 px-4 py-2.5 rounded-xl text-sm font-medium";

     useEffect(() => {
          const handleClickOutside = (event) => {
               if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                    setIsOpen(false);
               }
          };
          if(isOpen) document.addEventListener('mousedown', handleClickOutside);
          return () => document.removeEventListener('mousedown', handleClickOutside);
     }, [isOpen]);

     const handleLogout = async () => {
          try {
               await logout();
               googleLogout();
               setMenuOpen(false);
               navigate('/recruiterLogin');
          } catch (error) {
               console.error('Logout Failed: ', error);
          }
     }

     if (loading) { 
          return (
               <div className='flex justify-center items-center h-screen'>
                    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
               </div>
          )
     }
     
  return (
     <>
          <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
               <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-16 flex items-center justify-between">
                         {/* Logo */}
                         <NavLink to="/" className="flex items-center gap-2 group">
                              <span className="text-lg font-extrabold text-gray-900 group-hover:text-purple-600 transition duration-200 tracking-tight">
                                   Job.Portal
                              </span>
                         </NavLink>

                         {/* Desktop Nav */}
                         <div className="hidden sm:flex items-center gap-2">
                              
                         { user ? (

                              <div className="flex items-center gap-3">

                                   { user.role === 'user' && (        
                                        <NavLink to="/savedJobs" className={({ isActive }) => isActive ? active : base }>
                                             Saved Jobs
                                        </NavLink>   
                                   )}                      
                              
                                   { user.role === 'recruiter' && (
                                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? active : base }>
                                             Dashboard
                                        </NavLink>                                   
                                   )}

                                   {/* Profile Dropdown */}
                                   <div className="relative" ref={dropdownRef}>
                                        <button 
                                             onClick={() => setIsOpen(!isOpen)}
                                             className="flex items-center gap-2.5 pl-3 pr-1 py-1 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition duration-200 group">
                                             <p className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition hidden md:block">
                                             Hi, {user.first_name}
                                             </p>
                                             <img
                                                  src={user.image || defaultLogo}
                                                  alt="Profile"
                                                  referrerPolicy="no-referrer"
                                                  className="h-8 w-8 rounded-lg object-cover border-2 border-gray-100"
                                             />
                                             <svg className={`w-3.5 h-3.5 text-gray-400 transition duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                             </svg>

                                        </button>

                                        {/* Dropdown */}
                                        { isOpen && (
                                                                                          
                                             <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-2 overflow-hidden">
                                                  {/* User info */}
                                                  <div className="px-4 py-3 border-b border-gray-100">
                                                       <p className="text-xs font-bold text-gray-800 truncate">{user.first_name} {user.last_name}</p>
                                                       <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                                  </div>

                                                  <div className="py-1">
                                                       <Link to={user.role === 'recruiter' ? '/editedProfile' : '/savedJob'} 
                                                            onclick={() => setIsOpen(false)}
                                                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition">
                                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                            Manage Profile
                                                       </Link>
                                                  </div>

                                                  <div className="border-t border-gray-100 pt-1">
                                                       <button onClick={() => {handleLogout(); setIsOpen(false); }} className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-500 font-semibold hover:bg-red-50 transition">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                            </svg>
                                                            Logout
                                                       </button>
                                                  </div>
                                             </div>
                                        )}
                              
                                   </div>
                              </div>

                         ) : (
                         
                              <div className="flex items-center gap-2">
                                   <NavLink to="/recruiterLogin" className={ ({isActive})=> isActive ? active : base }>
                                        Recruiter Login
                                   </NavLink>
                                   <NavLink to="/userLogin" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition duration-200 shadow-sm shadow-purple-200">
                                        Login
                                   </NavLink>
                              </div>  
                         
                         )}

                         </div>

                         {/* Mobile hamburger */}
                         <button 
                              onClick={() => setMenuOpen(!menuOpen)}
                              className="sm:hidden p-2 rounded-xl text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition duration-200">
                              {menuOpen ? <FaTimes className="text-lg"/> : <FaBars className="text-lg"/>}
                         </button>
                    </div>

                    {/* Mobile Menu */}
                    { menuOpen && (
                              
                         <div className="sm:hidden border-t border-gray-100 py-3 space-y-1">

                         {/* User info */}

                         {user && (
                         
                              <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-purple-50 rounded-xl mx-1">
                                   <img
                                        src={user.image || defaultLogo}
                                        alt="Profile"
                                        referrerPolicy="no-referrer"
                                        className="h-10 w-10 rounded-xl object-cover border-2 border-white shadow-sm"
                                   />
                                   <div className="min-w-0">
                                        <p className="text-sm font-bold text-gray-800 truncate">{user.first_name} {user.last_name}</p>
                                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                   </div>
                              </div>
                         )}


                         {user ? (
                                                  
                              <>
                                   {user.role === 'user' && (
                                        <NavLink to="/savedJobs"  
                                             className={({isActive}) => isActive ? activeMobile : baseMobile }>
                                             Saved Jobs
                                        </NavLink>
                                   )}

                                   {user.role === 'recruiter' && (
                                        <NavLink to="/dashboard" 
                                             className={({ isActive })=> isActive ? activeMobile : baseMobile }>
                                             Dashboard
                                        </NavLink>
                                   )}
                                                            
                                   <NavLink
                                        to={user.role === 'recruiter' ? '/editedProfile' : '/savedJobs'}
                                        onClick={() => setMenuOpen(false)}                                        
                                        className="block text-gray-600 hover:bg-purple-50 hover:text-purple-600 px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200"
                                   >
                                        Manage Profile
                                   </NavLink>
                                   <div className="pt-2 border-t border-gray-100 mt-2">
                                        <button
                                             onClick={() => {handleLogout(); setMenuOpen(false); }}
                                             className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition duration-200"
                                        >
                                             Logout
                                        </button>
                                   </div>
                              </>

                         ) : (
                         
                              <>
                                   <NavLink to="/recruiterLogin"  
                                        onclick={() => setMenuOpen(false)}
                                        className="block text-gray-600 hover:bg-purple-50 hover:text-purple-600 px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200">
                                        Recruiter Login
                                   </NavLink>
                                   <div className="px-1 pt-1">
                                        <NavLink to="/userLogin"
                                             onclick={() => setMenuOpen(false)}
                                             className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm"
                                        >
                                        Login
                                        </NavLink>
                                   </div>
                              </>
                         )}
                         
                         </div>

                    )}
               
               </nav>
          </div>
     </>
    
  );
};

export default Navbar;