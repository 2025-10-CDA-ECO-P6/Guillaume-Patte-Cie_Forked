"use client";
import styles from './AnimalTabs.module.css';

export default function AnimalTabs({activeTab, onTabChange}) {
  return (
    <div className={styles.AnimalTabs}>
      <button
        className={activeTab === 'Visite' ? `${styles.inactive} ${styles.active}` : styles.inactive}
        onClick={() => onTabChange('Visite')}
      >
        Visite
      </button>
      <button
        className={activeTab === 'Vaccin' ? `${styles.inactive} ${styles.active}` : styles.inactive}
        onClick={() => onTabChange('Vaccin')}
      >
        Vaccin
      </button>
      <button
        className={activeTab === 'Traitement' ? `${styles.inactive} ${styles.active}` : styles.inactive}
        onClick={() => onTabChange('Traitement')}
      >
        Traitement
      </button>
    </div>
  );
}