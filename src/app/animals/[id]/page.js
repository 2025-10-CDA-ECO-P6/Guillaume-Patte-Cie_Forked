import AnimalHeader from "@/app/components/AnimalHeader/AnimalHeader";
import AnimalTabsWrapper from "@/app/components/AnimalTabs/AnimalTabsWrapper";
import data from "@/../public/animals.json";
import { fetchApi } from "@/app/utils/client";

export default async function AnimalPage({ params }) {
  const { id } = await params;

  const animal = await fetchApi({ endpoint: `animals/${id}` });
  const proprietaire = await fetchApi({ endpoint: `owners/${animal.data.ownerId}` });

  console.log(animal);
  console.log(proprietaire);

  if (!animal) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "#718096",
        }}
      >
        <h1>Animal non trouvé</h1>
        <p>L&apos;animal demandé n&apos;existe pas dans notre base de données.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "1.5rem",
        paddingBottom: "6rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <AnimalHeader animal={animal.data} proprietaire={proprietaire.data} />
      <AnimalTabsWrapper animalId={animal.data.id} data={data} />
    </div>
  );
}
