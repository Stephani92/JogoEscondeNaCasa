import { Localizacao } from './localizacao';
import { IhidingPlace } from '../interfaces/IhidingPlace';

export class Room extends Localizacao {

    Exits: Array<Localizacao> =  [];
    name: string;
    Nome: string;
    description: string;
    decoration: string;

    constructor(name: string, decoration: string) {
        super(name);
        this.decoration = decoration;
    }

}
