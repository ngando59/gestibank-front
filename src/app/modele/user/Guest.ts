import {Utilisateur} from './Utilisateur';

export class Guest extends Utilisateur {
  rue: string;
  codePostal: string;
  ville: string;
  departement: string;
  pays: string;

  constructor(id: number, email: string, identifiant: string, motDePasse: string,
              nom: string, prenom: string, telephone: string, nbEnfants: number, situationMatrimoniale: string,
              rue: string, codePostal: string, ville: string, departement: string, pays: string ) {
    super(id, email, identifiant, motDePasse, nom, prenom, telephone);
    this.rue = rue;
    this.codePostal = codePostal;
    this.ville = ville;
    this.departement = departement;
    this.pays = pays;
  }

}
