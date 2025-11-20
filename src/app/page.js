import AnimalCard from "./components/AnimalCard/animalCard";

export default async function Home() {
  const res = await fetch("http://localhost:3000/animals.json");
  const data = await res.json();

  const animaux = data.animaux;

  return (
    <div style={{ padding: "16px" }}>
      <h1>Liste des animaux</h1>

      {animaux.map(animal => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}