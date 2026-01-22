"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchApi } from "../utils/client";

const ReferenceContext = createContext();

export function ReferenceProvider({ children }) {
  const [species, setSpecies] = useState([]);
  const [veterinarians, setVeterinarians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadReferences() {
      try {
        const [speciesData, vetsData] = await Promise.all([
          fetchApi({ endpoint: "species" }),
          fetchApi({ endpoint: "veterinarians" }),
        ]);
        setSpecies(speciesData.data || []);
        setVeterinarians(vetsData.data || []);
       
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);

      }
    }

    loadReferences();
  }, []);

  const value = useMemo(() => ({ species, veterinarians, loading, error }), [species, veterinarians, loading, error]);

  return <ReferenceContext.Provider value={value}>{children}</ReferenceContext.Provider>;
}

export function useReferences() {
  const context = useContext(ReferenceContext);
  if (!context) {
    throw new Error("useReferences must be used within a ReferenceProvider");
  }
  return context;
}

