"use client";

import { useState } from "react";
import AnimalTabs from "./AnimalTabs";
import styles from "./AnimalTabs.module.css";
import VisitCard from "@/app/components/VisitCard/VisitCard";
import VaccineCard from "@/app/components/VaccineCard/VaccineCard";
import TreatmentCard from "@/app/components/TreatmentCard/TreatmentCard";

export default function AnimalTabsWrapper({ animalId, data }) {
    const [activeTab, setActiveTab] = useState("Visite");

    const visites = data.visites.filter(v => v.id_animal === animalId);
    const vaccins = data.vaccins.filter(v => v.id_animal === animalId);
    const traitements = data.traitements.filter(t => t.id_animal === animalId);

    return (
        <div>
            <div className={styles.tabs}>
                <AnimalTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </div>

            <div className={styles.tabContent}>
                {activeTab === "Visite" && (
                    <div>
                        {visites.length > 0 ? (
                            visites.map(v => (
                                <VisitCard
                                    key={v.id}
                                    visite={v}
                                    vaccins={data.vaccins}
                                    traitements={data.traitements}
                                    veterinaire={data.veterinaires.find(vet => vet.id === v.id_veterinaire)}
                                />
                            ))
                        ) : (
                            <p className={styles.noData}>Aucune visite enregistrée</p>
                        )}
                    </div>
                )}
                
                {activeTab === "Vaccin" && (
                    <div>
                        {vaccins.length > 0 ? (
                            vaccins.map(v => (
                                <VaccineCard key={v.id} vaccin={v} />
                            ))
                        ) : (
                            <p className={styles.noData}>Aucun vaccin enregistré</p>
                        )}
                    </div>
                )}
                
                {activeTab === "Traitement" && (
                    <div>
                        {traitements.length > 0 ? (
                            traitements.map(t => (
                                <TreatmentCard key={t.id} traitement={t} />
                            ))
                        ) : (
                            <p className={styles.noData}>Aucun traitement enregistré</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}