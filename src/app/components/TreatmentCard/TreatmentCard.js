import styles from "./TreatmentCard.module.css";
import { formatDate } from "@/app/utils/utils";

export default function TreatmentCard({ traitement }) {
  const now = new Date();
  const endDate = new Date(traitement.endDate);

  const isActive = !isNaN(endDate) && endDate >= now;
  const statusLabel = isActive ? "En cours" : "Terminé";

  return (
    <div className={`${styles.treatmentCard} ${isActive ? styles.active : styles.completed}`}>
      <div className={styles.header}>
        <h3 className={styles.treatmentName}>{traitement.nom}</h3>
        <span className={styles.badge}>{statusLabel}</span>
      </div>

      <div className={styles.details}>
        {traitement.dosage && (
          <div className={styles.detailRow}>
            <span className={styles.label}>Dosage:</span>
            <span className={styles.value}>{traitement.dosage}</span>
          </div>
        )}

        <div className={styles.detailRow}>
          <span className={styles.label}>Début:</span>
          <span className={styles.value}>{formatDate(traitement.date_debut)}</span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.label}>Fin:</span>
          <span className={styles.value}>{formatDate(traitement.date_fin)}</span>
        </div>
      </div>

      {traitement.observations && (
        <div className={styles.observations}>
          <p className={styles.observationsLabel}>Observations:</p>
          <p className={styles.observationsText}>{traitement.observations}</p>
        </div>
      )}
    </div>
  );
}
