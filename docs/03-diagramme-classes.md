# Diagramme de classes metier

```mermaid
classDiagram
  class Cabinet
  class Utilisateur
  class Patient
  class DossierMedical
  class RendezVous
  class Consultation
  class Ordonnance
  class LigneOrdonnance
  class Medicament
  class Facture
  class Notification
  class AuditLog
  Cabinet "1" --> "*" Utilisateur
  Cabinet "1" --> "*" Patient
  Patient "1" --> "1" DossierMedical
  Patient "1" --> "*" RendezVous
  Utilisateur "1" --> "*" RendezVous : medecin
  RendezVous "1" --> "0..1" Consultation
  DossierMedical "1" --> "*" Consultation
  Consultation "1" --> "*" Ordonnance
  Ordonnance "1" --> "*" LigneOrdonnance
  LigneOrdonnance "*" --> "0..1" Medicament
  Consultation "1" --> "0..1" Facture
  Utilisateur "1" --> "*" Notification
  Utilisateur "1" --> "*" AuditLog
```

## Enumerations

- `Role` : ADMIN, SECRETAIRE, MEDECIN.
- `StatutCompte` : ACTIF, INACTIF.
- `StatutRendezVous` : EN_ATTENTE, CONFIRME, ARRIVE, EN_CONSULTATION, TERMINE, ANNULE, ABSENT.
- `StatutFacture` : EN_ATTENTE, PAYEE, ANNULEE.
- `ModePaiement` : ESPECES, CARTE, CHEQUE, VIREMENT, ASSURANCE.
- `TypeOrdonnance` : MEDICAMENTS, EXAMENS.
