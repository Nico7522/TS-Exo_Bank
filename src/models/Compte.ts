import { Client } from "./Client.js";
import { Courant } from "./Courant.js";
import { Epargne } from "./Epargne.js";

export class Compte {
  public numero: number;
  protected _solde: number;
  public titulaire: Client;

  constructor(numero: number, solde: number, titulaire: Client) {
    this.numero = numero;
    this._solde = solde;
    this.titulaire = titulaire;
  }

  public Depot(add: number) {
    if (add <= 0) {
      return;
    } else {
      return (this._solde = this._solde + add);
    }
  }

  public Retrait(take: number) {
    if (this._solde - take < 0) {
      return;
    }
    return take > 0
      ? (this._solde = this._solde - take)
      : console.log("Entrez un montant valide");
  }

  public getSolde() {
    return this._solde;
  }

  public calculDesInterets() {
    let intCourant: number = 0;
    let intEpargne: number = 0;
    if (Object.getPrototypeOf(this).constructor === Courant) {
      intCourant = (this._solde / 100) * 3;
    } else {
      if (this._solde > 0) {
        intEpargne = (this._solde / 100) * 1.5;
      } else {
        intEpargne = -(this._solde / 100) * -4;
      }
    }
    return `intérêt du compte courant : ${intCourant}$ et intérêt du compte épargne : ${intEpargne}$ `;
  }
}
