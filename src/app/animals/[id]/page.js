export default async function AnimalPage({ params }) {  
  const { id } = await params;

  const res = await fetch('http://localhost:3000/animals.json'); 
  const data = await res.json();
  const animaux = data.animaux;

  const animal = animaux.find((a) => a.id.toString() === id);

  if (!animal) return <div>Animal not found</div>;

  return (
    <div>
      <h1>{animal.nom}</h1>
      <p>Espèce : {animal.espece}</p>
      <p>Race : {animal.race}</p>
      <p>Sexe : {animal.sexe}</p>
      <p>Date de naissance : {animal.date_naissance}</p>
      <p>Poids : {animal.poids} kg</p>

      <img src={`/${animal.photo}`} alt={animal.nom} />
    </div>
  );
}
