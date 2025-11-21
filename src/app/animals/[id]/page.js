import AnimalHeader from "@/app/components/AnimalHeader/animalHeader";

export default async function AnimalPage({ params }) {  
  const { id } = await params;

  const res = await fetch('http://localhost:3000/animals.json'); 
  const data = await res.json();
  const animaux = data.animaux;

  const animal = animaux.find((a) => a.id.toString() === id);

  if (!animal) return <div>Animal not found</div>;

  return (
    <div>
      <AnimalHeader animal={animal} />
    </div>
  );
}
