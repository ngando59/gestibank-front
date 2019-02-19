import {Utilisateur} from './Utilisateur';

export class Client extends Utilisateur {
  nbEnfants: number;
  situationMatrimoniale: string;

  constructor(id: number, email: string, identifiant: string, motDePasse: string,
              nom: string, prenom: string, telephone: string, nbEnfants: number, situationMatrimoniale: string) {
    super(id, email, identifiant, motDePasse, nom, prenom, telephone);
    this.nbEnfants = nbEnfants;
    this.situationMatrimoniale = situationMatrimoniale;
  }
}
