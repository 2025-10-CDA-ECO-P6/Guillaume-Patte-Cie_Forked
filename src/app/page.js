import AnimalCard from "@/app/components/AnimalCard/AnimalCard";
import data from "@/../public/animals.json";
import styles from "./page.module.css";

export default function HomePage() {
  const animaux = data.animaux;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🐾 Patte & Cie</h1>
        <p className={styles.subtitle}>Carnet de santé digital</p>
      </header>

      <div className={styles.animalGrid}>
        {animaux.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}