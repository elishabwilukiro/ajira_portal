import { React } from 'react';
import Aside from '../components/Aside';

const Dashboard = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-white'>
        <div className='flex flex-1 overflow-hidden'>

          <Aside />
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;