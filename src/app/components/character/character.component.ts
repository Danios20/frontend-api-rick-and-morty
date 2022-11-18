import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character, CharacterDTO } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent  {
  @Input() character!: CharacterDTO;
  @Output() addedCharacter = new EventEmitter<CharacterDTO>();
  @Output() showCharacterDetail = new EventEmitter<number>();

  constructor() { }

  onAddToCart() {
    this.addedCharacter.emit(this.character);
  }

  onShowDetail() {
    console.log('Estoy en detalle');
    this.showCharacterDetail.emit(this.character.id);
  }
}
