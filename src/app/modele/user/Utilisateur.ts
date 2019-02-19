export abstract class Utilisateur {

  id: number;
  email: string;
  identifiant: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  telephone: string;

  constructor(id: number, email: string, identifiant: string, motDePasse: string,
              nom: string, prenom: string, telephone: string) {
    this.id = id;
    this.email = email;
    this.identifiant = identifiant;
    this.motDePasse = motDePasse;
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
  }
}
