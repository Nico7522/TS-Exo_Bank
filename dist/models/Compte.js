import { Courant } from "./Courant.js";
export class Compte {
    constructor(numero, solde, titulaire) {
        this.numero = numero;
        this._solde = solde;
        this.titulaire = titulaire;
    }
    Depot(add) {
        if (add <= 0) {
            return;
        }
        else {
            return (this._solde = this._solde + add);
        }
    }
    Retrait(take) {
        if (this._solde - take < 0) {
            return;
        }
        return take > 0
            ? (this._solde = this._solde - take)
            : console.log("Entrez un montant valide");
    }
    getSolde() {
        return this._solde;
    }
    calculDesInterets() {
        let intCourant = 0;
        let intEpargne = 0;
        if (Object.getPrototypeOf(this).constructor === Courant) {
            intCourant = (this._solde / 100) * 3;
        }
        else {
            if (this._solde > 0) {
                intEpargne = (this._solde / 100) * 1.5;
            }
            else {
                intEpargne = -(this._solde / 100) * -4;
            }
        }
        return `intérêt du compte courant : ${intCourant}$ et intérêt du compte épargne : ${intEpargne}$ `;
    }
}
