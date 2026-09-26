import React from 'react';
import FitLogcard from './FitLogcard';
import { IWorkout } from '@/types/page';

const getFitLog = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', 
  {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch workouts');
  }
  
  return res.json();
};

const FitLog = async () => {

    const fitLogData =await getFitLog()
    return (
        <div className='grid grid-cols-3 gap-3 m-3'>
            {
                fitLogData.map((fitlog: IWorkout) =>(
                    <FitLogcard key={fitlog.id} fitlog={fitlog}/>
                ) )
            }
        </div>
    );
};

export default FitLog;