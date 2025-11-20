import Link from "next/link";
import styles from "./animalCard.module.css";

export default function AnimalCard({ animal }) {
  return (
    <Link href={`/animals/${animal.id}`} className={styles["animal-card"]}>
      <div className="animal-card-content">
        <img
          src={`/${animal.photo}`}
          alt={animal.nom}
          className="animal-photo"
        />

        <div className="animal-info">
          <h3>{animal.nom}</h3>
          <p>{animal.espece}</p>
        </div>
      </div>
    </Link>
  );
}