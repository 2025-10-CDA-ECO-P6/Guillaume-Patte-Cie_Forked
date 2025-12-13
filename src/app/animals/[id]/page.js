import AnimalHeader from "@/app/components/AnimalHeader/AnimalHeader";
import AnimalTabsWrapper from "@/app/components/AnimalTabs/AnimalTabsWrapper";
import data from "@/../public/animals.json";

export default async function AnimalPage({ params }) {
  const { id } = await params;
  
  const animaux = data.animaux;
  const proprietaires = data.proprietaires;

  const animal = animaux.find(a => a.id.toString() === id);
  const proprietaire = proprietaires.find(p => p.id === animal?.id_proprietaire);

  if (!animal) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        color: '#718096'
      }}>
        <h1>Animal non trouvé</h1>
        <p>L'animal demandé n'existe pas dans notre base de données.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '1.5rem',           
      paddingBottom: '6rem',       
      maxWidth: '900px',          
      margin: '0 auto' 
    }}>
      <AnimalHeader animal={animal} proprietaire={proprietaire}/>
      <AnimalTabsWrapper animalId={animal.id} data={data} />
    </div>
  );
}