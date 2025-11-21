import styles from './animalHeader.module.css';

export default function AnimalHeader({ animal }) {
    return (
        <div className={styles.animalCard}>
            <img
                src={`/${animal.photo}`}
                alt={animal.name}
                className={styles.animalImage}
            />
            <div className={styles.animalInfo}>
                <h1>{animal.nom}</h1>
                <p>Espèce: {animal.espece}</p>
                <p>Race: {animal.race}</p>
                <p>Sexe: {animal.sexe}</p>
                <p>Date de naissance: {animal.date_naissance}</p>
                <p>Poids: {animal.poids} kg</p>
            </div>
        </div>
    );
}
