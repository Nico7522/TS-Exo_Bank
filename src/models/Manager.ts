import { Person } from "./Person.js";

export class Manager extends Person {
  private _department: number;

  constructor(
    id: string,
    birthDate: Date,
    name: string,
    hobby: string,
    departement: number
  ) {
    super(id, birthDate, name, hobby);
    this._department = departement;
  }
}
