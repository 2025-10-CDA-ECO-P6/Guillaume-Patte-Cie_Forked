import styles from "./VaccineCard.module.css";
import { formatDate, getVaccineStatusLabel, getVaccineStatusClass } from "@/app/utils/utils";

export default function VaccineCard({ vaccin }) {
  const vaccineName = vaccin.vaccineType?.name;

  return (
    <div className={styles.vaccineCard}>
      <div className={styles.header}>
        <h3 className={styles.vaccineName}>{vaccineName}</h3>
        {vaccin.statut && (
          <span className={`${styles.badge} ${styles[getVaccineStatusClass(vaccin.statut)]}`}>
            {getVaccineStatusLabel(vaccin.statut)}
          </span>
        )}
      </div>

      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.label}>Date d&apos;administration:</span>
          <span className={styles.value}>{formatDate(vaccin.administrationDate)}</span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.label}>Date de rappel:</span>
          <span className={styles.value}>{formatDate(vaccin.expirationDate)}</span>
        </div>
      </div>
    </div>
  );
}
