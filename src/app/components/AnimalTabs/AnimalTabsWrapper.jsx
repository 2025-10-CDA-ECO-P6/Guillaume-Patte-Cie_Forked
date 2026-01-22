"use client";

import { useState, useEffect } from "react";
import AnimalTabs from "./AnimalTabs";
import styles from "./AnimalTabs.module.css";
import VisitCard from "@/app/components/VisitCard/VisitCard";
import VaccineCard from "@/app/components/VaccineCard/VaccineCard";
import TreatmentCard from "@/app/components/TreatmentCard/TreatmentCard";
import { fetchApi } from "@/app/utils/client";

export default function AnimalTabsWrapper({ animalId, data }) {
  const [activeTab, setActiveTab] = useState("Visite");
  const [healthRecord, setHealthRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const hr = await fetchApi({
          endpoint: "health-records",
          params: { animalId },
        });
        setHealthRecord(hr.data);
      } catch (err) {
        console.error("Erreur fetch health records :", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [animalId]);

  if (loading) return <p>Chargement...</p>;
  if (!healthRecord) return <p>Aucun dossier médical trouvé</p>;

  const visites = healthRecord.medicalCares.filter((care) =>
    care.tags.some((tag) => tag.name === "Consultation" || tag.name === "Contrôle"),
  );

  const vaccines = healthRecord.medicalCares
    .filter((care) => care.tags.some((tag) => tag.name === "Vaccin"))
    .flatMap((care) => care.vaccines);

  const traitements = healthRecord.medicalCares
    .filter((care) => care.tags.some((tag) => tag.name === "Traitement"))
    .flatMap((care) => care.treatments);

  return (
    <div>
      <div className={styles.tabs}>
        <AnimalTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className={styles.tabContent}>
        {activeTab === "Visite" &&
          (visites.length > 0 ? (
            visites.map((visite) => <VisitCard key={visite.id} visite={visite} />)
          ) : (
            <p className={styles.noData}>Aucune visite enregistrée</p>
          ))}

        {activeTab === "Vaccin" &&
          (vaccines.length > 0 ? (
            vaccines.map((v) => <VaccineCard key={v.id} vaccin={v} />)
          ) : (
            <p className={styles.noData}>Aucun vaccin enregistré</p>
          ))}

        {activeTab === "Traitement" &&
          (traitements.length > 0 ? (
            traitements.map((t) => <TreatmentCard key={t.id} traitement={t} />)
          ) : (
            <p className={styles.noData}>Aucun traitement enregistré</p>
          ))}
      </div>
    </div>
  );
}