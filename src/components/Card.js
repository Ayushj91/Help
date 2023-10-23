import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CardFour({ jobData }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then((res) => {
        setJobs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error fetching data:', err);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center mx-4">
      {jobs.map((job) => (
        <div key={job._id} className="mx-2 my-2">
          <div className="max-w-xs rounded-xl bg-pink-100">
            <div className="px-6 py-8 text-pink-800">
              <p className="mb-2 text-2xl font-medium">{job.title}</p>
              <p className="mb-6">{job.shortDescription}</p>
              <div className="mb-6 space-y-2">
                <div className="flex space-x-2 font-medium">
                  <span className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>{job.type}</span>
                </div>
                <div className="flex space-x-2 font-medium">
                  <span className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>{job.department}</span>
                </div>
                <div className="flex space-x-2 font-medium">
                  <span className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-xl font-medium text-white">See More Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
