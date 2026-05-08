import reactLogo from './assets/react.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import JobDetails from './pages/JobDetails'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobDetails' element={<JobDetails />} />
      </Routes>
    </>
  )
}

export default App
