import styles from "./VisitCard.module.css";
import { formatDate } from "@/app/utils/utils";

export default function VisitCard({ visite }) {
  const { description, careDate, vaccines = [], treatments = [], veterinarian } = visite;

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("fr-FR");

  return (
    <div className={styles.visitCard}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h3 className={styles.motif}>{description}</h3>
          <span className={styles.date}>{formatDate(careDate)}</span>
        </div>
        {veterinarian && (
          <p className={styles.veterinaire}>
            Dr. {veterinarian.prenom} {veterinarian.nom}
          </p>
        )}
      </div>

      <div className={styles.content}>
        {vaccines.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Vaccins administrés</h4>
            <ul className={styles.list}>
              {vaccines.map((v) => (
                <li key={v.id} className={styles.listItem}>
                  <span className={styles.bullet}>💉</span>
                  {v.vaccineType?.name || v.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {treatments.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Traitements prescrits</h4>
            <ul className={styles.list}>
              {treatments.map((t) => (
                <li key={t.id} className={styles.listItem}>
                  <span className={styles.bullet}>💊</span>
                  {t.nom} - {t.dosage || ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}