import AnimalCard from "@/app/components/AnimalCard/AnimalCard";

import styles from "./page.module.css";
import { fetchApi } from "./utils/client";
import { ReferenceProvider } from "./contexte/ReferenceContext";

export default async function HomePage() {
  const animals = await fetchApi({ endpoint: "animals" });

  return (
 
      <div className={styles.container}>
        <div className={styles.animalGrid}>
          {animals.data.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
  
  );
}
