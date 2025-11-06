import axios from 'axios';
import { Job } from '../types/jobs'; 

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await axios.get('http://localhost:8000/api/jobs/');
  return response.data as Job[]; // Conversion explicite en type Job[]
};