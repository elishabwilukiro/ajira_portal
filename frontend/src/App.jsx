import reactLogo from './assets/react.svg'
// import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import JobDetails from './pages/JobDetails'
import Dashboard from './pages/Dashboard'
import SavedJobs from './pages/SavedJobs'
import CreateJob from './pages/CreateJob'
import ManageJob from './pages/ManageJob'
import EditJob from './pages/EditJob'
import EditedProfile from './pages/EditedProfile'
import ViewApplication from './pages/ViewApplication'
import RecruiterLogin from './pages/login/RecruiterLogin'
import RecruiterSignup from './pages/login/RecruiterSignup'
import { GoogleOAuthProvider } from '@react-oauth/google'
import UserLogin from './pages/login/UserLogin'
import UserSignup from './pages/login/UserSignup'
import { ToastProvider } from './context/ToastContext'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

// Prevent Login To Users
const GuestRoute = ({children}) => {
  
  const {user, loading} = useContext();
  if(loading) return null;
  if(user.role === 'user') return <Navigate to='/' replace/>
  if(user.role === 'recruiter') return  <Navigate to='/dashboard' replace/>
  return children;

}
function App() {

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>  
        <AuthProvider>
          <ToastProvider>     
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/jobDetails' element={<JobDetails />} />
              <Route path='/createJob' element={<CreateJob />} />
              <Route path='/editJob' element={<EditJob />} />
              <Route path='/viewApplications' element={<ViewApplication />} />
              <Route path='/manageJobs' element={<ManageJob />} />
              <Route path='/editedProfile' element={<EditedProfile />} />              
              <Route path='/recruiterLogin' element={<RecruiterLogin />} />
              <Route path='/recruiterSignup' element={<RecruiterSignup />} />
              <Route path='/userLogin' element={<UserLogin />} />
              <Route path='/userSignup' element={<UserSignup />} />

              {/* User Routes Only */}
              <Route element={<ProtectedRoute allowedRoles={['user']} />}>
                <Route path='/savedJobs' element={<SavedJobs />} />
              </Route>

              {/* Recruiter Routes Only */}
              <Route element={<ProtectedRoute allowedRoles={['recruiter']} />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route> 

              {/* Not Found Route */}
              <Route 
                path='*' 
                element={
                  <h1 className='flex justify-center items-center h-screen text-4xl font-bold'>
                    404 - Not Found
                  </h1>
                } />

            </Routes>
          </ToastProvider> 
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
