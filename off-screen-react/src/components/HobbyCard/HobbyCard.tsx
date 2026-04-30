import React from 'react';
import { Hobby } from '../../data/hobbies';
import styles from './HobbyCard.module.css';

interface Props {
  hobby: Hobby;
}

function HobbyCard({ hobby }: Props) {
  const badgeClass: Record<string, string> = {
    'First-Timer': styles.badgeFirstTimer,
    'Beginner': styles.badgeBeginner,
    'Intermediate': styles.badgeIntermediate,
    'Advanced': styles.badgeAdvanced,
    'Expert': styles.badgeExpert,
  };

  return (
    <div className={styles.card}>
      <img src={hobby.imageUrl} alt={hobby.name} className={styles.img} />
      <div className={styles.body}>
        <div className={styles.tags}>
          {hobby.tags.map((tag: string) => (
            <span key={tag} className={styles.tag}>
              <span className={styles.tagDot} />
              {tag}
            </span>
          ))}
        </div>
        <h3 className={styles.name}>{hobby.name}</h3>
        <p className={styles.desc}>{hobby.description}</p>
        <div className={styles.meta}>
          <span className={styles.time}>⏱ {hobby.timeToLearn}</span>
          <div className={styles.footer}>
            <span className={`${styles.badge} ${badgeClass[hobby.difficulty] || styles.badgeBeginner}`}>
              {hobby.difficulty}
            </span>
            <span className={styles.cost}>{hobby.cost}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HobbyCard;
