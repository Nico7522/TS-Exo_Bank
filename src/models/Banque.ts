import { Courant } from "./Courant.js";
import { Client } from "./Client.js";
import { Compte } from "./Compte.js";
import { Epargne } from "./Epargne.js";
export class Banque {
  private _tab: Compte[] = [];
  private _nom: string;

  constructor(nom: string) {
    this._nom = nom;
  }

  // public addAccount(num: number, compte: Compte) {
  //   if (num === compte.numero) {
  //     this._tab.push(compte);
  //   }
  // }

  public ajouterCompte(compte: Compte) {
    let bool: boolean = false;
    this._tab.forEach((acc) => {
      if (compte.numero === acc.numero) {
        bool = true;
      }
    });
    if (bool === false) {
      this._tab.push(compte);
    }
  }

  public Compte(num: number) {
    const search = this._tab.filter((acc) => {
      if (num === acc.numero) {
        return acc;
      }
    });
    return search;
  }

  public avoirDesComptes(name: string) {
    let sum: number = 0;
    this._tab.forEach((acc) => {
      if (
        name === acc.titulaire.name &&
        Object.getPrototypeOf(acc).constructor === Courant
      ) {
        sum = sum + acc.getSolde();
      }
    });
    return sum;
  }
}
