import { Component, OnInit } from '@angular/core';
import { Oponente } from '../models/oponente';
import { Outside } from '../models/outside';
import { OutSideWdoor } from '../models/outSideWdoor';
import { Localizacao } from '../models/localizacao';
import { RoomWdoor } from '../models/roomWdoor';
import { Room } from '../models/room';
import { IhasExteriorDoor } from '../interfaces/IhasExteriorDoor';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() {
  }

  private oponente: Oponente;
  private ihasDoor: IhasExteriorDoor;

  Living: RoomWdoor;
  Kitchen: RoomWdoor;
  DiningRoom: Room;
  FrontYard: OutSideWdoor;
  BackYard: OutSideWdoor;
  Garden: Outside;
  VariasLocal: Array<Localizacao> =  [];
  currentLocal: Localizacao;
  objEscondido: Localizacao;
  doorVisiable: boolean;

  exitsRound: string[];
  itemdescr: string;
  check: boolean;

  ngOnInit() {
    
    this.CreateObj();
    this.currentLocal = this.DiningRoom;
    this.moveToNewLocal(this.DiningRoom);
    console.log(this.currentLocal);
    this.itemdescr = this.currentLocal.description;
    this.iniciar();
  }


  private CreateObj() {
        this.Living = new RoomWdoor('Porta de vidro escuro', 'Living Room', 'An antique carpet');
        this.Kitchen = new RoomWdoor( 'Porta de madeira', 'Kitchen', ' Geladeira');
        this.DiningRoom = new Room('Dining Room ', 'Mesa redonda ');
        this.FrontYard = new OutSideWdoor('Porta de vidro escuro', false, 'FrontYard');
        this.BackYard = new OutSideWdoor('Porta de medeira', false, 'BackYard');
        this.Garden = new Outside(false, 'Garden');
        this.DiningRoom.Exits = [this.Living, this.Kitchen];
        this.Living.Exits =  [this.DiningRoom];
        this.Kitchen.Exits =  [this.DiningRoom];
        this.FrontYard.Exits =  [this.Garden];
        this.BackYard.Exits =  [this.Garden];
        this.Garden.Exits = [this.FrontYard, this.BackYard];
        this.Living.DoorLocation = this.FrontYard;
        this.FrontYard.DoorLocation = this.Living;
        this.Kitchen.DoorLocation = this.BackYard;
        this.BackYard.DoorLocation = this.Kitchen;

  }
//         // ir para algum lugar
  moveToNewLocal(newLocal: Localizacao) {
      this.currentLocal = newLocal;
      if (this.currentLocal instanceof RoomWdoor) {
        this.doorVisiable = true;
      } else {
        this.doorVisiable = false;
        if (this.currentLocal instanceof OutSideWdoor) {
        this.doorVisiable = true;
        } else {
          this.doorVisiable = false;
        }
      }
      console.log(this.doorVisiable);
  }
  private isMy(obj): obj is IhasExteriorDoor  {

      return typeof obj  !== undefined;
  }
  private iniciar() {
    this.oponente = new Oponente();
    this.objEscondido = this.oponente.move(this.currentLocal);
    this.check = true;
  }

  Go(i: number) {
    console.log(i);
    this.moveToNewLocal(this.currentLocal.Exits[i]); }

  GoDoor() {
    this.ihasDoor = (this.currentLocal as IhasExteriorDoor);
    console.log(this.ihasDoor);
    this.moveToNewLocal(this.ihasDoor.DoorLocation);
  }

  hideObj() {
    this.objEscondido = this.oponente.move(this.currentLocal);
    this.check = true;
  }

  checkObj(): boolean {
    if (this.oponente.check(this.currentLocal)) {
      return true;
      this.check = false;
    } else {
      return false;
    }
  }
}
