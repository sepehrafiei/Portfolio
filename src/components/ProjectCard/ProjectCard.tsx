import React from 'react';
import styles from './ProjectCardStyles.module.css';
import Bubble from './../Bubble/Bubble';

interface InfoCardProps {
  title: string;
  date: string;
  information?: string[];
  skills?: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, date, information = [], skills = [] }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h1>{title}</h1>
        <p>{date}</p>
        <div className={styles.bubbles}>
          {skills.map((skill, index) => (
            <Bubble key={index} value={skill} />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        {information.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;