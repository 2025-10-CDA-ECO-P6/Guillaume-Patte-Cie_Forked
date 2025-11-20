import Link from "next/link";

export default async function Home() { 
  const res = await fetch('http://localhost:3000/animals.json'); 
  const data = await res.json();
  const animaux = data.animaux;

  return (
    <div>
      <h1>Liste des animaux</h1>
      <div className="animalList">
        {animaux.map(animal => (
          <Link 
            key={animal.id}
            href={`/animals/${animal.id}`}
            className="animalCard"
          >
            <img src={`/${animal.photo}`} alt={animal.nom} />
            <div>
              <h2>{animal.nom}</h2>
              <p>Espèce : {animal.espece}</p>
            </div>      
          </Link>
        ))}
      </div>
    </div>
  );
}