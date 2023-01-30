import { Client } from "./models/Client.js";
import { Courant } from "./models/Courant.js";
import { Banque } from './models/Banque.js';
import { Epargne } from './models/Epargne.js';
// const person = new Person(
//   "nicolas777",
//   new Date("2000-01-01"),
//   "Nicolas",
//   "Musique"
// );
// const person2 = new Person(
//     "john123", 
//     new Date("1990-11-01"), 
//     "John", 
//     "Cinéma"
// );
// console.log(person);
// console.log(person2);
// console.log(person.id);
// person.presentYourslef();
// person2.presentYourslef();
// person.name = "Jane";
// console.log(person);
// person2.setName("JohnD");
// console.log(person2);
// const manager1 = new Manager(
//   "jane12",
//   new Date("1980-01-01"),
//   "Jane",
//   "Gold",
//   5
// );
// console.log(manager1);
const client1 = new Client('Nicolas', 'D\'Addabbo', new Date('2000-01-01'));
const client2 = new Client('John', 'Doe', new Date('1989-01-01'));
console.log(client1);
const courantNicolas = new Courant(777888999, 500, client1, 10);
const courantNicolas2 = new Courant(687553247, 100, client1, 10);
const courantJohn = new Courant(68755744547, 500, client2, -10);
const epargneNicolas = new Epargne(55469887, -500, client1, new Date('1989-01-01'));
const banque1 = new Banque('Fortis');
banque1.ajouterCompte(courantNicolas);
banque1.ajouterCompte(courantNicolas2);
banque1.ajouterCompte(courantJohn);
banque1.ajouterCompte(epargneNicolas);
console.log(courantNicolas.getSolde());
console.log(courantNicolas.getLigneDeCredit());
console.log(banque1.Compte(68755755447));
courantNicolas.Depot(300);
courantNicolas.Retrait(0);
console.log(courantNicolas.getSolde());
console.log(banque1.avoirDesComptes("Nicolas"));
console.log(banque1.Compte(68755744547));
console.log(courantJohn.calculDesInterets());
console.log(epargneNicolas.calculDesInterets());
// console.log(banque1.courant);
// console.log(banque1);
// console.log(banque1.getTab());
