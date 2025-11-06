import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api/jobs';
import { Job } from '../types/jobs';

export const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs().then(data => setJobs(data));
  }, []);

  return (
    <div className="jobs-container">
      <h2>Offres d'emploi</h2>
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company} • {job.location}</p>
        </div>
      ))}
    </div>
  );
};