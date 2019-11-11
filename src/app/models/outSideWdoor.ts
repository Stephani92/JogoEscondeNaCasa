import { Outside } from './outside';
import { IhasExteriorDoor } from '../interfaces/IhasExteriorDoor';

export class OutSideWdoor extends Outside implements IhasExteriorDoor {

    constructor(doorDescrip: string, hot: boolean, name: string) {
        super(hot, name);
        this.DoorDescription = doorDescrip;
    }
}
