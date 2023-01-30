export class Client {
  public name: string;
  private _surname: string;
  private _birthDate: Date;

  constructor(name: string, surname: string, birthDate: Date) {
    this.name = name;
    this._surname = surname;
    this._birthDate = birthDate;
  }
}
