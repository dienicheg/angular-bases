import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'dbz-add-charater',
  templateUrl: './add-charater.component.html',
  styleUrls: ['./add-charater.component.css']
})
export class AddCharaterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()


  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    console.log(this.character)
    if( this.character.name.length === 0 ) return

    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0, id: uuid()}
  }

}
