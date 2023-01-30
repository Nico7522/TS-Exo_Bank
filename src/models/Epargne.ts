import { Client } from "./Client.js";
import { Compte } from "./Compte.js";

export class Epargne extends Compte {
    private _dateDernierRetrait: Date;

    constructor(numero: number, solde: number, titulaire: Client, dateDernierRetrait: Date) {
        super(numero, solde, titulaire);
        this._dateDernierRetrait = dateDernierRetrait;
      }

  
}