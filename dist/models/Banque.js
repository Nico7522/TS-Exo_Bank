import { Courant } from "./Courant.js";
export class Banque {
    constructor(nom) {
        this._tab = [];
        this._nom = nom;
    }
    // public addAccount(num: number, compte: Compte) {
    //   if (num === compte.numero) {
    //     this._tab.push(compte);
    //   }
    // }
    ajouterCompte(compte) {
        let bool = false;
        this._tab.forEach((acc) => {
            if (compte.numero === acc.numero) {
                bool = true;
            }
        });
        if (bool === false) {
            this._tab.push(compte);
        }
    }
    Compte(num) {
        const search = this._tab.filter((acc) => {
            if (num === acc.numero) {
                return acc;
            }
        });
        return search;
    }
    avoirDesComptes(name) {
        let sum = 0;
        this._tab.forEach((acc) => {
            if (name === acc.titulaire.name &&
                Object.getPrototypeOf(acc).constructor === Courant) {
                sum = sum + acc.getSolde();
            }
        });
        return sum;
    }
}
