## User Story 1 — Consulter la liste des animaux
**En tant que** personnel de la clinique  
**Je veux** voir la liste complète des animaux  
**Afin de** accéder rapidement à leurs informations médicales

### Critères d’acceptation
- [ ] La liste affiche nom, espèce, race, propriétaire
- [ ] Les données viennent du fichier JSON
- [ ] Chaque animal est cliquable vers sa fiche

### Notes
- La recherche est une User Story séparée.

## User Story 2 — Rechercher un animal
**En tant que** personnel de la clinique  
**Je veux** filtrer la liste des animaux  
**Afin de** retrouver rapidement un dossier

### Critères d’acceptation
- [ ] La recherche filtre les résultats en temps réel
- [ ] La recherche peut se faire sur nom / espèce / propriétaire

## User Story 3 — Consulter la fiche d’un animal
**En tant que** personnel de la clinique  
**Je veux** accéder à la fiche détaillée d’un animal  
**Afin de** consulter l’ensemble de son dossier médical

### Critères d’acceptation
- [ ] L’accès se fait depuis la liste
- [ ] La fiche affiche les sont les informations générales
- [ ] La fiche affiche les visites
- [ ] La fiche affiche les vaccins
- [ ] La fiche affiche les traitements en cours

## User Story 4 — Consulter les informations de mon animal
**En tant que** propriétaire d’un animal  
**Je veux** consulter uniquement la fiche de mon animal  
**Afin de** suivre son état de santé et ses soins

### Critères d’acceptation
- [ ] Le propriétaire ne voit que les infos de son animal
- [ ] L'accès ne permet pas de modifier les informations
- [ ] Les données affichées proviennent du JSON

## User Story 5 — Historique des visites
**En tant que** personnel de la clinique  
**Je veux** voir les visites passées d’un animal  
**Afin de** comprendre son suivi médical

### Critères d’acceptation
- [ ] La liste des visites affiche date, motif, vétérinaire
- [ ] Les données viennent du JSON

## User Story 6 — Vaccins de l’animal
**En tant que** personnel de la clinique  
**Je veux** voir les vaccins réalisés  
**Afin de** vérifier s'il est à jour

### Critères d’acceptation
- [ ] Chaque vaccin affiche type, date, rappel
- [ ] Le statut (à jour / retard) est visible

## User Story 7 — Traitements en cours
**En tant que** personnel de la clinique  
**Je veux** afficher les traitements actuels  
**Afin de** savoir ce que l’animal prend actuellement

### Critères d’acceptation
- [ ] Chaque traitement affiche nom, posologie, dates
- [ ] Les traitements terminés ne sont pas affichés (optionnel)
