import { Client } from "./Client.js";
import { Banque } from "./Banque.js";
import { Compte } from "./Compte.js";
export class Courant extends Compte {
  private _ligneDeCredit: number;

  constructor(
    numero: number,
    solde: number,
    titulaire: Client,
    ligneDeCredit: number
  ) {
    super(numero, solde, titulaire);
    this._ligneDeCredit = ligneDeCredit;
  }

  // public Depot(add: number) {
  //   if (add <= 0) {
  //     return;
  //   } else {
  //     return (this._solde = this._solde + add);
  //   }
  // }

  public Retrait(take: number) {
    if (this._solde - take < this._ligneDeCredit) {
      return;
    }
    return take > 0
      ? (this._solde = this._solde - take)
      : console.log("Entrez un montant valide");
  }

  public getLigneDeCredit() {
    if (this._ligneDeCredit > 0 && !NaN) {
      return this._ligneDeCredit;
    } else {
      return (this._ligneDeCredit = this.setLigneDeCredit());
    }
  }
  private setLigneDeCredit() {
    return (this._ligneDeCredit = 10);
  }
}
