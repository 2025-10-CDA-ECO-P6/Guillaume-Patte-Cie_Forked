import Link from "next/link";
import styles from "./AnimalCard.module.css";

export default function AnimalCard({ animal }) {
  return (
    <Link href={`/animals/${animal.id}`} className={styles.link}>
      <div className={styles["animal-card"]}>
        <img src={`/${animal.photoUrl}`} alt={animal.nom} className={styles["animal-photo"]} />

        <div className={styles["animal-info"]}>
          <h3>{animal.name}</h3>
          <p>{animal.speciesId}</p>
        </div>
      </div>
    </Link>
  );
}
