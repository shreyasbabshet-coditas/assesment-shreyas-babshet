import { JobCardProps } from "./JobCard.types.ts";
import styles from "./JobCard.module.scss";
import { useEffect, useState } from "react";

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [cardColor, setCardColor] = useState("");

  useEffect(() => {
    const getCardColor = getColor(job.deadline);
    setCardColor(getCardColor ?? "");
  }, [job]);

  const getColor = (date: Date) => {
    if (new Date(date).getDate() - new Date().getDate() > 21) {
      return "green";
    } else if (new Date(date).getDate() - new Date().getDate() < 14) {
      return "yellow";
    } else if (new Date(date).getDate() - new Date().getDate() < 3) {
      return "red";
    }
  };

  return (
    <div
      className={[styles.card, cardColor !== "" ? styles[cardColor] : ""].join(
        " "
      )}
    >
      <p>{job.title}</p>
      <p>{job.description}</p>
      <p>{job.contact}</p>
      <p>{job.email}</p>
      <p>{job.location}</p>
      <p>{new Date(job.deadline).toLocaleDateString()}</p>
      <button>Show Interest</button>
    </div>
  );
};

export default JobCard;
