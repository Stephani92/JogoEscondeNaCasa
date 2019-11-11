import { Localizacao } from './localizacao';
import { IhasExteriorDoor } from '../interfaces/IhasExteriorDoor';
import { Room } from './room';
import { IhidingPlace } from '../interfaces/IhidingPlace';

export class Oponente {

    constructor() {}
    // tslint:disable-next-line: variable-name
    _ihasExterior: IhasExteriorDoor;
    // tslint:disable-next-line: variable-name
    _iplace: IhidingPlace;
    esconde: Localizacao;
    esco: Localizacao;
    estaEscondido = false ;
    rs: Localizacao;
    private result: Room;
    res: any;
    // currentLocal: Localizacao;

    move(MyLocal: Localizacao): Localizacao {
        this.esconde = MyLocal;
        for (let i = 0; i <= 7; i++) {
            if (this._ihasExterior instanceof Localizacao) {
                const x = Math.random();
                if (x === 1) {
                    this._ihasExterior = (this.esconde as IhasExteriorDoor);
                    this.esconde = this._ihasExterior.DoorLocation;
                }
                if (this.esconde.Exits.length === 1) {

                   this.rs = this.esconde.Exits[0] as Localizacao;
                   this.esconde = this.rs;
                } else {
                    this.esconde = this.esconde.Exits[this.randomInt(0 , this.esconde.Exits.length)];
                }
            }
        }

        this.estaEscondido = true;
        this._iplace = this.esconde as IhidingPlace;
        this.esco.esconderijo = true;
        return this.esconde;
    }

    randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min - 1)) + min;
     }
    check(CurrentLocat: Localizacao) {
        this._iplace = CurrentLocat as IhidingPlace;
        if (this._iplace.esconderijo) {
            this._iplace.esconderijo = false;
            return true;
        } else {
            return false;
        }
    }
}

// }
//         public bool Check(Location CurrentLocat)
//         {
            
//             IhidingPlace esco = CurrentLocat as IhidingPlace;
//             if (esco.esconderijo)
//             {
//                 esco.esconderijo = false;
//                 return true;
//             }
//             else
//             {
//                 return false;