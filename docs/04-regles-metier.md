# Regles metier

## Securite

- RM-001 : les mots de passe sont haches et ne sont jamais retournes par l'API.
- RM-002 : chaque API exige une authentification sauf la connexion et l'etat de sante.
- RM-003 : un utilisateur ou un cabinet inactif ne peut pas acceder au systeme.
- RM-004 : un utilisateur ne consulte que les donnees de son cabinet.
- RM-005 : les actions sensibles sont journalisees.

## Patients

- RM-101 : le CIN est unique lorsqu'il est renseigne.
- RM-102 : un patient avec un historique est archive, jamais supprime physiquement.
- RM-103 : seul le personnel medical autorise modifie les donnees medicales.

## Rendez-vous et file d'attente

- RM-201 : aucun rendez-vous ne peut etre cree dans le passe.
- RM-202 : un medecin ne peut pas avoir deux rendez-vous qui se chevauchent.
- RM-203 : toute annulation exige un motif.
- RM-204 : un patient ne peut avoir qu'un passage actif dans la file d'attente.
- RM-205 : les transitions de statut suivent le parcours defini.

## Consultation et ordonnance

- RM-301 : une consultation reference obligatoirement un patient, un medecin et un cabinet.
- RM-302 : une consultation urgente peut exister sans rendez-vous.
- RM-303 : une consultation validee est verrouillee ; toute correction ulterieure est tracee.
- RM-304 : une ordonnance est rattachee a une consultation validee.
- RM-305 : chaque ligne medicamenteuse contient dosage, frequence et duree.

## Facturation

- RM-401 : le numero de facture est unique et genere par le serveur.
- RM-402 : le montant est positif et stocke en valeur decimale exacte.
- RM-403 : une facture payee ne peut pas etre supprimee.
- RM-404 : l'annulation exige un motif et conserve la trace de l'auteur.
