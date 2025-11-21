import Link from "next/link";
import styles from "./animalCard.module.css";

export default function AnimalCard({ animal }) {
  return (
    <Link href={`/animals/${animal.id}`} className={styles.link}>
      <div className={styles["animal-card"]}>
        
        <img
          src={`/${animal.photo}`}
          alt={animal.nom}
          className={styles["animal-photo"]}
        />

        <div className={styles["animal-info"]}>
          <h3>{animal.nom}</h3>
          <p>{animal.espece}</p>
        </div>

      </div>
    </Link>
  );
}

