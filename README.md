# Patte & Cie - Carnet de Santé Animal

Application web de gestion de carnets de santé pour animaux développée avec Next.js dans le cadre du projet **Concepteur Développeur d'Applications 2025/2026**.

---

## Table des matières

- [Présentation](#présentation)
- [Livrables du projet](#livrables-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Architecture des données](#architecture-des-données)
- [Composants principaux](#composants-principaux)
- [Conventions de code](#conventions-de-code)
- [Déploiement](#déploiement)
- [Maintenance](#maintenance)

---

## Présentation

**Patte & Cie** est une application web permettant de digitaliser les carnets de santé des animaux d'une clinique vétérinaire. L'objectif est de remplacer les carnets papier par un système numérique accessible et facile à utiliser.

### Contexte

La clinique vétérinaire "Patte & Cie" cherchait une solution pour :
- Centraliser les informations de santé des animaux
- Faciliter le suivi des vaccinations
- Consulter rapidement l'historique des visites
- Gérer les traitements en cours

---

## Livrables du projet

### Documentation de conception
- [Dictionnaire de données](https://docs.google.com/spreadsheets/d/17JyU83t3ya661kucpoTF_LXSzlqsekAdA_Kiwh7BFUo/edit?usp=sharing) - Description complète des entités et attributs
- [Use Cases UML](./docs/UML.png) - Diagramme des cas d'utilisation
- [MCD (MERISE)](./docs/MCD.png) - Modèle Conceptuel de Données
- [Maquette Figma](https://www.figma.com/design/B5ZaHGCpnCRVZv1IGO2fOM/Pet-Care-Mobile-App--Community-?node-id=0-1&t=kwS1LccnnXS66CfF-1) - Design system et maquettes UI

### Application fonctionnelle
- ✅ Code source Next.js
- ✅ Interface responsive
- ✅ Données mockées (JSON)
- ✅ Déploiement en ligne

---

## Technologies utilisées

### Framework & Bibliothèques
- **Next.js 16.0.3** (avec Turbopack)
- **React 19** (Server & Client Components)
- **CSS Modules** (styling isolé par composant)

### Outils de développement
- **Node.js 18+** (environnement d'exécution)
- **npm** (gestionnaire de paquets)
- **Lucide React** (icônes)

### Fonts
- **Manrope** (Google Fonts) - Police principale

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** version 18.x ou supérieure
- **npm** ou **yarn**
- Un éditeur de code (VS Code recommandé)

### Vérifier les versions installées

```bash
node --version  # Doit afficher v18.x.x ou supérieur
npm --version   # Doit afficher 9.x.x ou supérieur
```

---

## Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd patte-et-cie
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer en mode développement

```bash
npm run dev
```

L'application sera accessible sur **http://localhost:3000**

### 4. Build pour production

```bash
npm run build
npm start
```

---

## Structure du projet

```
patte-et-cie/
│
├── public/
│   ├── animals.json              # Données mockées
│   └── images/
│       └── animals/              # Photos des animaux
│           ├── chat.png
│           └── chien.png
│
├── src/
│   └── app/
│       ├── animals/
│       │   └── [id]/
│       │       └── page.js       # Page détail animal (dynamique)
│       │
│       ├── components/
│       │   ├── AnimalCard/       # Carte animal (liste)
│       │   │   ├── AnimalCard.js
│       │   │   └── AnimalCard.module.css
│       │   │
│       │   ├── AnimalHeader/     # En-tête avec infos animal
│       │   │   ├── AnimalHeader.js
│       │   │   └── AnimalHeader.module.css
│       │   │
│       │   ├── AnimalTabs/       # Système d'onglets
│       │   │   ├── AnimalTabs.js
│       │   │   ├── AnimalTabsWrapper.jsx
│       │   │   └── AnimalTabs.module.css
│       │   │
│       │   ├── VaccineCard/      # Carte vaccin
│       │   │   ├── VaccineCard.js
│       │   │   └── VaccineCard.module.css
│       │   │
│       │   ├── TreatmentCard/    # Carte traitement
│       │   │   ├── TreatmentCard.js
│       │   │   └── TreatmentCard.module.css
│       │   │
│       │   ├── VisitCard/        # Carte visite
│       │   │   ├── VisitCard.js
│       │   │   └── VisitCard.module.css
│       │   │
│       │   └── Navbar/           # Barre de navigation
│       │       ├── Navbar.js
│       │       └── Navbar.module.css
│       │
│       ├── utils/
│       │   └── utils.js          # Fonctions utilitaires
│       │
│       ├── layout.js             # Layout global
│       ├── page.js               # Page d'accueil
│       ├── page.module.css       # Styles page d'accueil
│       └── globals.css           # Styles globaux
│
├── docs/                         # Documentation du projet
│   ├── UML.png
│   └── MCD.png
│
├── .gitignore
├── package.json
├── next.config.js
└── README.md
```

---

## Fonctionnalités

### Page d'accueil (`/`)
- Liste de tous les animaux sous forme de cartes
- Affichage : photo, nom, espèce
- Navigation vers la fiche détaillée au clic

### Page de détail animal (`/animals/[id]`)

#### En-tête (AnimalHeader)
- Photo de l'animal
- Informations principales :
  - Nom
  - Espèce
  - Race
  - **Âge calculé automatiquement** à partir de la date de naissance
  - Poids
  - Propriétaire

#### Système d'onglets (AnimalTabs)

**1. Onglet Visites**
- Historique complet des consultations vétérinaires
- Informations par visite :
  - Date et motif
  - Vétérinaire (Dr. Prénom Nom)
  - Compte rendu
  - Vaccins administrés lors de la visite
  - Traitements prescrits lors de la visite

**2. Onglet Vaccins**
- Liste de tous les vaccins de l'animal
- Informations par vaccin :
  - Type de vaccin
  - Date d'administration
  - Date de rappel
  - **Statut calculé automatiquement** :
    - 🟢 **À jour** (rappel dans > 30 jours)
    - 🟠 **Bientôt** (rappel dans ≤ 30 jours)
    - 🔴 **En retard** (rappel passé, avec animation pulse)

**3. Onglet Traitements**
- Liste de tous les traitements
- Informations par traitement :
  - Nom du traitement
  - Dosage
  - Dates début/fin
  - Observations vétérinaires
  - **Badge automatique** :
    - "EN COURS" (violet) si date de fin > aujourd'hui
    - "TERMINÉ" (gris) si date de fin < aujourd'hui

### Navigation
- Navbar fixe en bas avec bouton "Home"
- Retour à l'accueil depuis n'importe quelle page

---

## Architecture des données

### Structure du fichier `animals.json`

Le fichier contient 6 collections principales :

#### 1. Propriétaires
```json
{
  "id": 1,
  "nom": "Martin",
  "prenom": "Julie",
  "telephone": "0601020304",
  "email": "julie.martin@example.com",
  "adresse": "12 Rue des Lilas, Paris"
}
```

#### 2. Animaux
```json
{
  "id": 1,
  "nom": "Luna",
  "espece": "Chat",
  "race": "Bengal",
  "sexe": "Femelle",
  "date_naissance": "2021-05-10",
  "poids": 3.5,
  "photo": "images/animals/chat.png",
  "id_proprietaire": 1
}
```

#### 3. Vétérinaires
```json
{
  "id": 1,
  "nom": "Lefèvre",
  "prenom": "Simon"
}
```

#### 4. Visites
```json
{
  "id": 1,
  "id_animal": 1,
  "date": "2025-06-05",
  "motif": "Vaccination annuelle",
  "compte_rendu": "L'animal est en bonne santé générale.",
  "id_veterinaire": 1,
  "vaccins": [1],       // IDs des vaccins administrés
  "traitements": []     // IDs des traitements prescrits
}
```

#### 5. Vaccins
```json
{
  "id": 1,
  "id_animal": 1,
  "type": "Typhus",
  "date": "2025-06-05",
  "date_rappel": "2026-06-05",
  "statut": "up_to_date"
}
```

#### 6. Traitements
```json
{
  "id": 1,
  "id_animal": 1,
  "nom": "Vermifuge",
  "dosage": "1 pipette",
  "date_debut": "2024-11-12",
  "date_fin": "2024-11-19",
  "observations": "Rien à signaler"
}
```

### Relations entre entités
- Un **animal** appartient à un **propriétaire** (`id_proprietaire`)
- Une **visite** concerne un **animal** (`id_animal`)
- Une **visite** est effectuée par un **vétérinaire** (`id_veterinaire`)
- Un **vaccin** est lié à un **animal** (`id_animal`)
- Un **traitement** est lié à un **animal** (`id_animal`)
- Une **visite** peut référencer plusieurs **vaccins** et **traitements** (arrays d'IDs)

---

##  Composants principaux

### Composants de présentation

#### `AnimalCard`
**Rôle :** Affiche une carte animal sur la page d'accueil  
**Props :** `{ animal }`  
**Fichiers :** `AnimalCard.js`, `AnimalCard.module.css`

#### `AnimalHeader`
**Rôle :** Affiche l'en-tête avec photo et infos de l'animal  
**Props :** `{ animal, proprietaire }`  
**Calculs :** Âge automatique via `calculateAge()`  
**Fichiers :** `AnimalHeader.js`, `AnimalHeader.module.css`

#### `VaccineCard`
**Rôle :** Affiche une carte de vaccin  
**Props :** `{ vaccin }`  
**Features :** Badge de statut coloré, animation pulse si en retard  
**Fichiers :** `VaccineCard.js`, `VaccineCard.module.css`

#### `TreatmentCard`
**Rôle :** Affiche une carte de traitement  
**Props :** `{ traitement }`  
**Calculs :** Détermine si actif (date_fin >= aujourd'hui)  
**Fichiers :** `TreatmentCard.js`, `TreatmentCard.module.css`

#### `VisitCard`
**Rôle :** Affiche une carte de visite vétérinaire  
**Props :** `{ visite, vaccins, traitements, veterinaire }`  
**Features :** Affiche vaccins et traitements liés à la visite  
**Fichiers :** `VisitCard.js`, `VisitCard.module.css`

### Composants logiques

#### `AnimalTabs`
**Rôle :** Affiche les 3 boutons d'onglets  
**Props :** `{ activeTab, onTabChange }`  
**Fichiers :** `AnimalTabs.js`

#### `AnimalTabsWrapper`
**Rôle :** Gère l'état des onglets et affiche le contenu correspondant  
**Type :** Client Component (`"use client"`)  
**Props :** `{ animalId, data }`  
**State :** `activeTab` (Visite | Vaccin | Traitement)  
**Filtrage :** Filtre automatiquement les données par `id_animal`  
**Fichiers :** `AnimalTabsWrapper.jsx`, `AnimalTabs.module.css`

#### `Navbar`
**Rôle :** Barre de navigation fixe en bas avec bouton Home  
**Fichiers :** `Navbar.js`, `Navbar.module.css`

---

## Fonctions utilitaires (`utils.js`)

### `calculateAge(dateNaissance)`
**Description :** Calcule l'âge d'un animal  
**Entrée :** `"2021-05-10"` (format YYYY-MM-DD)  
**Sortie :** `"4 ans"` ou `"6 mois"` (selon l'âge)

### `formatDate(date)`
**Description :** Formate une date au format français  
**Entrée :** `"2025-06-05"` (format YYYY-MM-DD)  
**Sortie :** `"05/06/2025"` (format DD/MM/YYYY)

### `getVaccineStatusLabel(statut)`
**Description :** Traduit le statut d'un vaccin en français  
**Entrée :** `"up_to_date"`, `"overdue"`, ou `"upcoming"`  
**Sortie :** `"À jour"`, `"En retard"`, ou `"Bientôt"`

### `getVaccineStatusClass(statut)`
**Description :** Retourne la classe CSS pour le statut  
**Entrée :** `"up_to_date"`  
**Sortie :** `"status-up-to-date"`

### `calculateVaccineStatus(dateRappel)`
**Description :** Calcule automatiquement le statut d'un vaccin  
**Entrée :** `"2026-06-05"` (date de rappel)  
**Sortie :** `"up_to_date"`, `"upcoming"`, ou `"overdue"`  
**Logique :**
- Si rappel passé → `"overdue"`
- Si rappel dans ≤ 30 jours → `"upcoming"`
- Sinon → `"up_to_date"`

---

## Conventions de code

### Nomenclature

#### Composants React
- **Dossiers :** PascalCase (`AnimalCard/`, `VaccineCard/`)
- **Fichiers JS :** PascalCase (`AnimalCard.js`, `VaccineCard.js`)
- **Fichiers CSS :** PascalCase (`AnimalCard.module.css`)

#### Pages Next.js
- **Fichiers :** camelCase (`page.js`, `layout.js`)

#### Utilitaires & Config
- **Fichiers :** camelCase (`utils.js`, `globals.css`)

#### Données
- **Fichiers :** minuscules (`animals.json`)

### Unités CSS

#### Utiliser `rem` pour :
- Spacing (padding, margin, gap)
- Font sizes
- Border radius
- Width/Height de composants

#### Utiliser `px` pour :
- Box shadows
- Borders (1px, 2px, 4px)
- Max-width de conteneurs
- Très petites valeurs (< 3px)

**Exemple :**
```css
.card {
  padding: 1.5rem;           
  margin-bottom: 1rem;       
  border-radius: 1rem;      
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  
  border: 1px solid #e2e8f0;                 
}
```

### Imports

Utiliser les path aliases :
```javascript
// ✅ Bon
import AnimalCard from '@/app/components/AnimalCard/AnimalCard';
import { formatDate } from '@/app/utils/utils';
import data from '@/../public/animals.json';

// ❌ Éviter
import AnimalCard from '../../../components/AnimalCard/AnimalCard';
```

---

## Design System

### Couleurs principales

```css
--violet-primary: #8b7cff;
--violet-light: #a89eff;
--gray-dark: #2d3748;
--gray-medium: #718096;
--gray-light: #e2e8f0;
--gray-lighter: #f7fafc;
```

### Bordures
- Toutes les cartes : bordure gauche violette de 4px
- Border radius : 1rem (standard pour toutes les cartes)

### Ombres
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  /* Standard */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); /* Hover */
```

### Animations
- Hover : `transform: translateY(-2px)`
- Transition : `0.2s ease`
- Pulse (vaccins en retard) : Animation de 2s

---

## Déploiement

### Build pour production

```bash
npm run build
npm start
```

Le build génère une version optimisée de l'application dans le dossier `.next/`

### Notes importantes pour le déploiement

- Les fichiers JSON doivent être accessibles depuis `/public/`
- Les images doivent être dans `/public/images/`
- Vérifier que tous les chemins d'import sont corrects
- Tester le build en local avant de déployer

---

## Maintenance

### Ajouter un nouvel animal

1. Ouvrir `public/animals.json`
2. Ajouter l'objet dans le tableau `animaux` :
```json
{
  "id": 3,
  "nom": "Nom",
  "espece": "Espèce",
  "race": "Race",
  "sexe": "Sexe",
  "date_naissance": "YYYY-MM-DD",
  "poids": 0,
  "photo": "images/animals/photo.png",
  "id_proprietaire": 1
}
```
3. Ajouter la photo dans `public/images/animals/`
4. Ajouter les vaccins, traitements et visites associés avec le même `id_animal`

### Ajouter un nouveau vaccin

```json
{
  "id": 4,
  "id_animal": 1,
  "type": "Nom du vaccin",
  "date": "2025-12-13",
  "date_rappel": "2026-12-13",
  "statut": "up_to_date"
}
```

### Ajouter un nouveau traitement

```json
{
  "id": 4,
  "id_animal": 1,
  "nom": "Nom du traitement",
  "dosage": "Dosage",
  "date_debut": "2025-12-01",
  "date_fin": "2025-12-20",
  "observations": "Observations"
}
```

### Modifier les couleurs du thème

Rechercher et remplacer dans tous les fichiers CSS :
- `#8b7cff` (violet principal)
- `#a89eff` (violet clair)

---

## Problèmes connus et solutions

### Erreur d'hydratation
**Symptôme :** Message d'erreur concernant `cz-shortcut-listen`  
**Cause :** Extension de navigateur qui modifie le DOM  
**Solution :** Ajouter `suppressHydrationWarning` sur le `<body>` dans `layout.js`

### Images ne s'affichent pas
**Cause :** Chemin incorrect dans le JSON  
**Solution :** Vérifier que le chemin est `"images/animals/chat.png"` (sans `/` au début)

### Vaccins ne s'affichent pas
**Cause :** `id_animal` manquant dans le JSON  
**Solution :** Vérifier que chaque vaccin a bien un champ `id_animal`
