import React from 'react';
import styles from "./InfoCard.module.css"

interface InfoCardProps {
  title: string;
  description: string;
  imgURL: string;
}

const InfoCard: React.FC<InfoCardProps> = ({title, description, imgURL}) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.cardContent}>
        <img src={imgURL} alt=""/>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default InfoCard;