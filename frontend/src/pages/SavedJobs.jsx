import { React } from 'react';
import UserProfile from '../components/UserProfile';
import AppliedJobListings from '../components/AppliedJobListings';

const SavedJobs = () => {
  return (
    <>
      <div className="w-[95%] mx-auto py-10 flex flex-col lg:flex-row gap-8">
        <UserProfile />
        <AppliedJobListings />

      </div>
    </>
  );
};

export default SavedJobs;