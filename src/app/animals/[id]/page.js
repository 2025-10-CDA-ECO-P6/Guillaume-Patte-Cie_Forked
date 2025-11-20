export default async function AnimalPage({ params }) {  
  const { id } = params;
  const data = await fetch("http://localhost:3000/animals.json").then(r => r.json());
  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) return <div>Animal not found</div>;

  return (
    <div>
        <h1>{animal.nom}</h1>
        <p>{animal.espece} - {animal.race}</p>
        <img src={`/${animal.photo}`} width="200" alt={animal.nom} />
    </div>
  );
}
