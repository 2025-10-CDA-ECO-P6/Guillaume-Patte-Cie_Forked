import styles from './VaccineCard.module.css';
import { formatDate, getVaccineStatusLabel, getVaccineStatusClass } from '@/app/utils/utils';

export default function VaccineCard({ vaccin }) {
  return (
    <div className={styles.vaccineCard}>
      <div className={styles.header}>
        <h3 className={styles.vaccineName}>{vaccin.type}</h3>
        <span className={`${styles.badge} ${styles[getVaccineStatusClass(vaccin.statut)]}`}>
          {getVaccineStatusLabel(vaccin.statut)}
        </span>
      </div>
      
      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.label}>Date d'administration:</span>
          <span className={styles.value}>{formatDate(vaccin.date)}</span>
        </div>
        
        <div className={styles.detailRow}>
          <span className={styles.label}>Date de rappel:</span>
          <span className={styles.value}>{formatDate(vaccin.date_rappel)}</span>
        </div>
      </div>
    </div>
  );
}