import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character, CharacterDTO } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent  {
  @Input() character!: CharacterDTO;
  @Output() addedProduct = new EventEmitter<CharacterDTO>();
  @Output() showProduct = new EventEmitter<number>();

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.character);
  }

  onShowDetail() {
    this.showProduct.emit(this.character.id);
  }
}
