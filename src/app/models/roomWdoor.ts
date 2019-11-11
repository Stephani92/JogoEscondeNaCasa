import { Room } from './room';
import { Localizacao } from './localizacao';

export class RoomWdoor extends Room {

    private doorDescription: string;
    private doorLocalizacao: Localizacao;

    set DoorDescription(valeu: string) {
        this.doorDescription = valeu;
    }
    get DoorDescription(): string {
        return this.doorDescription;
    }

    set DoorLocalizacao(valeu: Localizacao) {
        this.doorLocalizacao = valeu;
    }
    get DoorLocalizacao(): Localizacao {
        return this.doorLocalizacao;
    }
    constructor(decrip: string, name: string, decoration: string) {
        super(name, decoration);
        this.DoorDescription = decrip;
    }
}
