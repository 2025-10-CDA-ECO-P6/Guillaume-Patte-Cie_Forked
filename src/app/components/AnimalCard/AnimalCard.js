"use client";

import Link from "next/link";
import styles from "./AnimalCard.module.css";
import { useReferences } from "@/app/contexte/ReferenceContext";

export default function AnimalCard({ animal }) {
  const { species } = useReferences();

  const speciesName = species.find((s) => s.id === animal.speciesId)?.name || "";

  return (
    <Link href={`/animals/${animal.id}`} className={styles.link}>
      <div className={styles["animal-card"]}>
        <img src={`/${animal.photoUrl}`} alt={animal.nom} className={styles["animal-photo"]} />

        <div className={styles["animal-info"]}>
          <h3>{animal.name}</h3>
          <p>{speciesName}</p>
        </div>
      </div>
    </Link>
  );
}
