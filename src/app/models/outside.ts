import { IhidingPlace } from '../interfaces/IhidingPlace';
import { IhasExteriorDoor } from '../interfaces/IhasExteriorDoor';
import { Localizacao } from './localizacao';

export class Outside extends Localizacao implements IhidingPlace  {

    constructor( hot: boolean, name: string) {
        super(name);
        this.hot = hot;
    }

    DoorDescription: string;
    DoorLocation: Localizacao;
    Exits: Array<Localizacao> =  [];
    name: string;


    private Esconderijo: boolean;
    public hot: boolean ;
    description: string ;
    nweDesc: string;
    get esconderijo(): boolean {return this.Esconderijo; }
    set esconderijo(valeu: boolean) {this.Esconderijo = valeu; }

    get Description(): string {
        this.nweDesc = this.Description;
        if (this.hot) {
            this.nweDesc += 'Iits very hot.';
        }
        return this.Description;
    }
    set Description(valeu: string) { this.description = valeu; }
    isMyInterface(obj: any): obj is IhasExteriorDoor {
            throw new Error('');
    }
}

// dddddddddddd

