import { useEffect, useState } from "react";
import { IJob } from "./JobsList.types";
import { getAllJobs } from "../../services/jobs.service";
import JobCard from "../JobCard/JobCard";
import styles from "./JobsList.module.scss";
const JobsList: React.FC = () => {
  const [jobsList, setJobsList] = useState<IJob[]>([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const result = await getAllJobs();
    setJobsList(result);
  };

  return (
    <div className={styles.container}>
      <h2>Jobs</h2>
      {jobsList.map((job) => {
        return <JobCard key={`jobcard-${job.id}`} job={job} />;
      })}
    </div>
  );
};

export default JobsList;
