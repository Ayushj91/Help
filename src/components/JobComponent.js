import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { CardFour } from './Card';

const JobComponent = () => {
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
    .then(res => {
        setJobs(res.data);
        console.log(res.data);
    })
    .catch(err => {
        console.log('Error fetching data:', err);
    });
}, []);


  return (
    <div>
        <CardFour jobData={jobs}/>
        {jobs.map((job) => (
            <div key={job._id}>
            <h1>{job.title}</h1>
            <p>{job.shortDescription}</p>
            <p>{job.longDescription}</p>
            <p>{job.type}</p>
            <p>{job.department}</p>
            <p>{job.location}</p>
            <p>{job.experienceLevel}</p>
            </div>
        ))}
    </div>
  )
}

export default {JobComponent};