export class Person {
    // Elément privé _=> Convention
    private _id: string;
    private _birthDate: Date;
    private _name: string;
    public hobby: string;
  
    constructor(id: string, birthDate: Date, name: string, hobby: string) {
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
  
    set name(newName: string) {
      this._name = newName;
    }
  
    public setName(newName: string) {
      this._name = newName;
    }
  
    // Fonctions
    public presentYourslef() {
      console.log("Hello tout le monde je suis", this._name);
    }
  }

