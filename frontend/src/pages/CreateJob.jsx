import React, { useState } from 'react';
import Aside from '../components/Aside';
import TextInput from '../components/inputs/TextInput';
import SelectInput from '../components/inputs/SelectInput';
import TextAreaInput from '../components/inputs/TextAreaInput';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const CreateJob = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    level: "",
    key_role: "",
    responsibility: "",
    skill_and_experience: "",
    location: "",
    location_type: "",
    job_type: "",
    application_deadline: "",
    min_salary: "",
    max_salary: "",
    company_description: "",
    company_name: "",
    website: "",
    contact_person: "",
    company_email: "",
    company_logo: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'company_logo') {
      setFormData((prev) => ({
        ...prev,
        company_logo: files?.[0] || null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: typeof value === 'string' ? value.trimStart() : value,
      }));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    }); 

    try {
      const res = await api.post('/jobs', data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);

      // Reset form
      setFormData({
        title: "",
        department: "",
        level: "",
        key_role: "",
        responsibility: "",
        skill_and_experience: "",
        location: "",
        location_type: "",
        job_type: "",
        application_deadline: "",
        min_salary: "",
        max_salary: "",
        company_description: "",
        company_name: "",
        website: "",
        contact_person: "",
        company_email: "",
        company_logo: null,
      });

      navigate('/');

    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className='flex flex-col min-h-screen bg-white'>

        {/* Header For Mobile */}
        <header className='h-16 flex items-center bg-white shadow-md border-b lg:hidden'>
          <button onClick={toggleSidebar} className='p-4 text-purple-600'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className='ml-4 text-xl font-semibold text-purple-800'>
              Talent Hub
          </div>
        </header>


        <div className='flex flex-1 overflow-hidden'>
          {isSidebarOpen && (
            <div className='fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden' onClick={toggleSidebar} />
          )}

          <Aside isOpen = {isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
              <header className="mb-6 sm:mb-8 pb-4 border-b border-gray-300">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Create New Job
                </h1>
              </header>

              <section className="content-section">

                    <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 rounded-xl shadow-lg space-y-8">

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">
                          Job Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <TextInput 
                                label="Job Title"
                                name="title"
                                placeholder="e.g Senior Frontend Developer"
                                value={formData.title}
                                onChange={handleChange}
                                required={true}
                            />
                            <SelectInput
                                label="Department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
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
                                value={formData.level}
                                onChange={handleChange}
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

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">
                          Job Description Details
                        </h3>
                        <div className="space-y-6">

                            <TextAreaInput
                                label="Key Role / Summary"
                                name="key_role"
                                placeholder="A brief summary of the position and its impact."
                                rows={3}
                                value={formData.key_role}
                                onChange={handleChange}
                                required={true}
                            />

                            <TextAreaInput
                                label="Responsibilities"
                                name="responsibility"
                                placeholder="List the primary day-to-day duties and deliverables (e.g., Develop new features, Collaborate with design team, etc.)"
                                rows={6}
                                value={formData.responsibility}
                                onChange={handleChange}
                                required={true}
                            />

                            <TextAreaInput
                                label="Skills & Experience"
                                name="skill_and_experience" 
                                placeholder="List required qualifications, technical skills, and years of experience (e.g., 5+ years with React, Proficient in Tailwind CSS, Bachelor's degree, etc.)"
                                rows={6}
                                value={formData.skill_and_experience}
                                onChange={handleChange}
                                required={true}
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">
                          Location, Salary & Schedule
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                            <TextInput 
                                label="Location"
                                type="text" 
                                name="location" 
                                placeholder="City, State, or Country" 
                                value={formData.location}
                                onChange={handleChange}
                                required={true}
                            />

                            <SelectInput
                                label="Work Setup"
                                name="location_type" 
                                value={formData.location_type}
                                onChange={handleChange}
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
                                value={formData.job_type}
                                onChange={handleChange}                                
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
                                value={formData.application_deadline}
                                onChange={handleChange}
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
                                value={formData.min_salary}
                                onChange={handleChange}
                                required={true}
                            />

                            <TextInput 
                                label="Maximum Salary"
                                type="number" 
                                name="max_salary" 
                                placeholder="95000" 
                                min="0" 
                                value={formData.max_salary}
                                onChange={handleChange}
                                required={true}
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-purple-700 border-b pb-2 mb-4 border-gray-300">
                          Company & Contact Info
                        </h3>
                        <div className="grid grid-cols-1 gap-6">

                             <TextAreaInput
                                label="Company Description"
                                name="company_description"
                                placeholder="Briefly describe your company, its mission, and culture." 
                                value={formData.company_description}
                                onChange={handleChange}
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
                                value={formData.company_name}
                                onChange={handleChange}
                                required={true}
                            />

                             <TextInput 
                                label="Company Website"
                                type="url" 
                                name="website" 
                                placeholder="https://www.company.com" 
                                value={formData.website}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                             <TextInput 
                                label="Contact Person (Hiring Manager) "
                                type="text" 
                                name="contact_person" 
                                placeholder="Name or HR Contact" 
                                value={formData.contact_person}
                                onChange={handleChange}
                                required={true}
                            />
                             <TextInput 
                                label="Company Email"
                                type="email" 
                                name="company_email" 
                                placeholder="hr@company.com" 
                                value={formData.company_email}
                                onChange={handleChange}
                                required={true}
                            />

                             <TextInput 
                                label="Company Logo"
                                type="file" 
                                name="company_logo"                               
                                accept="image/*" 
                                onChange={handleChange}  
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


          
        </div>

      </div>
    </>
  );
};

export default CreateJob;