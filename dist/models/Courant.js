import { Compte } from "./Compte.js";
export class Courant extends Compte {
    constructor(numero, solde, titulaire, ligneDeCredit) {
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
    Retrait(take) {
        if (this._solde - take < this._ligneDeCredit) {
            return;
        }
        return take > 0
            ? (this._solde = this._solde - take)
            : console.log("Entrez un montant valide");
    }
    getLigneDeCredit() {
        if (this._ligneDeCredit > 0 && !NaN) {
            return this._ligneDeCredit;
        }
        else {
            return (this._ligneDeCredit = this.setLigneDeCredit());
        }
    }
    setLigneDeCredit() {
        return (this._ligneDeCredit = 10);
    }
}
