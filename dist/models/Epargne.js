import { Compte } from "./Compte.js";
export class Epargne extends Compte {
    constructor(numero, solde, titulaire, dateDernierRetrait) {
        super(numero, solde, titulaire);
        this._dateDernierRetrait = dateDernierRetrait;
    }
}
