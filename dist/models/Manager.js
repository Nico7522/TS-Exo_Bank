import { Person } from "./Person.js";
export class Manager extends Person {
    constructor(id, birthDate, name, hobby, departement) {
        super(id, birthDate, name, hobby);
        this._department = departement;
    }
}
