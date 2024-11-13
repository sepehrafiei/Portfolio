import React from 'react';
import styles from './InfoCard.module.css';
import Bubble from './../Bubble/Bubble';

interface InfoCardProps {
  title: string;
  position?: string;
  date: string;
  information?: string[];
  skills?: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, position, date, information = [], skills = [] }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h1>{position}</h1>
        <h2>{title}</h2>
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