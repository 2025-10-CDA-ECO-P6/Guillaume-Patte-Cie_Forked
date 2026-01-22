import styles from "./AnimalHeader.module.css";
import { calculateAge } from "@/app/utils/utils";

export default function AnimalHeader({ animal, proprietaire }) {
  const age = calculateAge(animal.birthDate);

  return (
    <div className={styles.header}>
      <div className={styles.imageContainer}>
        <img src={`/${animal.photoUrl}`} alt={animal.name} className={styles.animalImage} />
      </div>

      <div className={styles.infoContainer}>
        <h1 className={styles.animalName}>{animal.name} Information</h1>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Espèce:</span>
            <span className={styles.value}>{animal.speciesId}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Race:</span>
            <span className={styles.value}>{animal.speciesId}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Age:</span>
            <span className={styles.value}>{age}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Poid:</span>
            <span className={styles.value}>{animal.weight} kg</span>
          </div>

          {proprietaire && (
            <div className={styles.detailItem}>
              <span className={styles.label}>Propriétaire:</span>
              <span className={styles.value}>
                {proprietaire.firstName} {proprietaire.lastName}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
