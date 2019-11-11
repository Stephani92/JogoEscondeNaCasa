
export  class Localizacao  {

    constructor(name: string) {
        this.name = name;
    }
    esconderijo: boolean;
    DoorDescription: string;
    DoorLocation: Localizacao;

    Exits: Array<Localizacao> =  [];
    name: string;
    description: string;

    get Description(): string {
        this.description = 'Youre standing in the' + this.name + '. you see exits to the following places: ';
        for (let index = 0; index <= this.Exits.length; index++) {
            this.description += '' + this.Exits[index].name;
            if (index !== this.Exits.length - 1) {

            }
            this.description += '.';
            return this.description;
        }

    }
}


