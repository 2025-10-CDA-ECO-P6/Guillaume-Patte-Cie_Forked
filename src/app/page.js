export default async function Home() { 
  const res = await fetch('http://localhost:3000/animals.json'); 

  const data = await res.json();
  const animaux = data.animaux;

  return (
    <div>
      <h1>Liste des animaux</h1>
      <ul>
        {animaux.map(animal => (
          <li key={animal.id}>
            {animal.nom} - {animal.espece}
          </li>
        ))}
      </ul>
    </div>
  );
}