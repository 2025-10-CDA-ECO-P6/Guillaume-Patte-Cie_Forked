import styles from './VisitCard.module.css';
import { formatDate } from '@/app/utils/utils';

export default function VisitCard({ visite, vaccins, traitements, veterinaire }) {
  // Récupérer les vaccins et traitements liés à cette visite
  const visiteVaccins = vaccins.filter(v => visite.vaccins.includes(v.id));
  const visiteTraitements = traitements.filter(t => visite.traitements.includes(t.id));
  
  return (
    <div className={styles.visitCard}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h3 className={styles.motif}>{visite.motif}</h3>
          <span className={styles.date}>{formatDate(visite.date)}</span>
        </div>
        {veterinaire && (
          <p className={styles.veterinaire}>
            Dr. {veterinaire.prenom} {veterinaire.nom}
          </p>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Compte rendu</h4>
          <p className={styles.compteRendu}>{visite.compte_rendu}</p>
        </div>
        
        {visiteVaccins.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Vaccins administrés</h4>
            <ul className={styles.list}>
              {visiteVaccins.map(v => (
                <li key={v.id} className={styles.listItem}>
                  <span className={styles.bullet}>💉</span>
                  {v.type}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {visiteTraitements.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Traitements prescrits</h4>
            <ul className={styles.list}>
              {visiteTraitements.map(t => (
                <li key={t.id} className={styles.listItem}>
                  <span className={styles.bullet}>💊</span>
                  {t.nom} - {t.dosage}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}