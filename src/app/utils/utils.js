/**
 * Calcule l'âge d'un animal à partir de sa date de naissance
 * @param {string} dateNaissance - Date au format YYYY-MM-DD
 * @returns {string} - Age formaté (ex: "2 ans", "6 mois")
 */
export function calculateAge(dateNaissance) {
  const birthDate = new Date(dateNaissance);
  const today = new Date();
  
  const ageInMs = today - birthDate;
  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
  
  if (ageInYears >= 1) {
    const years = Math.floor(ageInYears);
    return `${years} ${years === 1 ? 'an' : 'ans'}`;
  } else {
    const months = Math.floor(ageInYears * 12);
    return `${months} mois`;
  }
}

/**
 * Formate une date au format français
 * @param {string} date - Date au format YYYY-MM-DD
 * @returns {string} - Date formatée (ex: "05/06/2025")
 */
export function formatDate(date) {
  if (!date) return '';
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

/**
 * Retourne le label français pour le statut d'un vaccin
 * @param {string} statut - Statut du vaccin
 * @returns {string} - Label en français
 */
export function getVaccineStatusLabel(statut) {
  const labels = {
    'up_to_date': 'À jour',
    'overdue': 'En retard',
    'upcoming': 'Bientôt'
  };
  return labels[statut] || statut;
}

/**
 * Retourne la classe CSS appropriée pour le statut d'un vaccin
 * @param {string} statut - Statut du vaccin
 * @returns {string} - Nom de la classe CSS
 */
export function getVaccineStatusClass(statut) {
  return `status-${statut.replace('_', '-')}`;
}

/**
 * Vérifie si une date est passée
 * @param {string} date - Date au format YYYY-MM-DD
 * @returns {boolean}
 */
export function isDatePassed(date) {
  return new Date(date) < new Date();
}

/**
 * Calcule le statut d'un vaccin basé sur sa date de rappel
 * @param {string} dateRappel - Date de rappel au format YYYY-MM-DD
 * @returns {string} - Statut calculé
 */
export function calculateVaccineStatus(dateRappel) {
  const today = new Date();
  const rappelDate = new Date(dateRappel);
  const diffInDays = (rappelDate - today) / (1000 * 60 * 60 * 24);
  
  if (diffInDays < 0) {
    return 'overdue';
  } else if (diffInDays <= 30) {
    return 'upcoming';
  } else {
    return 'up_to_date';
  }
}