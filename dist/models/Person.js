export class Person {
    constructor(id, birthDate, name, hobby) {
        this._id = id;
        this._birthDate = birthDate;
        this._name = name;
        this.hobby = hobby;
    }
    // Accesseur - Getter
    get id() {
        return this._id;
    }
    //   public getId() {
    //     return this._id;
    //   }
    // Setter
    set name(newName) {
        this._name = newName;
    }
    setName(newName) {
        this._name = newName;
    }
    // Fonctions
    presentYourslef() {
        console.log("Hello tout le monde je suis", this._name);
    }
}
