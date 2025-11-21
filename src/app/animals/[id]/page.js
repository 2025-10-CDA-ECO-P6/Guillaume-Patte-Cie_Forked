import AnimalHeader from "@/app/components/AnimalHeader/animalHeader";
import AnimalTabsWrapper from "@/app/components/AnimalTabs/animalTabsWrapper";

export default async function AnimalPage({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/animals.json");
  const data = await res.json();
  
  const animaux = data.animaux;
  const proprietaires = data.proprietaires;

  const animal = animaux.find(a => a.id.toString() === id);
  const proprietaire = proprietaires.find(p => p.id === animal.id_proprietaire);

  if (!animal) return <div>Animal not found</div>;

  return (
    <div>
      <AnimalHeader animal={animal} proprietaire={proprietaire}/>
      <AnimalTabsWrapper animalId={animal.id} data={data} />
    </div>
  );
}

