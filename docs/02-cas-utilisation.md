# Cas d'utilisation

```mermaid
flowchart TB
  Admin[Administrateur]
  Sec[Secretaire]
  Med[Medecin]
  Admin --> A1[Gerer les cabinets]
  Admin --> A2[Gerer les utilisateurs]
  Admin --> A3[Gerer les medicaments]
  Admin --> A4[Consulter l'audit]
  Sec --> S1[Gerer les patients]
  Sec --> S2[Gerer les rendez-vous]
  Sec --> S3[Gerer la file d'attente]
  Sec --> S4[Gerer la facturation]
  Med --> M1[Consulter le dossier medical]
  Med --> M2[Realiser une consultation]
  Med --> M3[Creer une ordonnance]
  Med --> M4[Consulter le dashboard]
```

## Parcours principal

1. L'administrateur cree un cabinet et ses comptes.
2. La secretaire cree ou retrouve le patient.
3. Elle planifie un rendez-vous sans conflit de creneau.
4. A l'arrivee, elle place le patient dans la file d'attente.
5. Le medecin appelle le patient et ouvre une consultation.
6. Le medecin complete le dossier, pose son diagnostic et cree l'ordonnance.
7. La secretaire enregistre le paiement et imprime la facture.
8. Le systeme journalise chaque action sensible.

## Cas alternatifs indispensables

- compte ou cabinet inactif ;
- patient deja existant ;
- rendez-vous dans le passe ;
- creneau du medecin deja occupe ;
- patient absent ou rendez-vous annule ;
- consultation urgente sans rendez-vous ;
- facture annulee avec motif ;
- acces interdit a un dossier d'un autre cabinet.
