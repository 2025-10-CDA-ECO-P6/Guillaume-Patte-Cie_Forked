"use client";

import { useState } from "react";
import AnimalTabs from "./animalTabs";
import styles from "./animalTabs.module.css";

export default function AnimalTabsWrapper() {
    const [activeTab, setActiveTab] = useState("Vaccin");

    return (
        <div>
            <div className={styles.tabs}>
                <AnimalTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </div>

            <div className={styles.tabContent}>
                {activeTab === "Vaccin" && <div>Contenu vaccin ici !</div>}
                {activeTab === "Visite" && <div>Contenu visite ici !</div>}
                {activeTab === "Traitement" && <div>Contenu traitement ici !</div>}
            </div>
        </div>
    );
}
