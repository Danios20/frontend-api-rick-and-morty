import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character, CharacterDTO } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
/**
 * Clase del componente para el personaje
 */
export class CharacterComponent  {
  /**
   * Input para recibir información desde el componente padre character-list
   */
  @Input() character!: CharacterDTO;
  /**
   * Output representa salida de datos hacía el componente padre character-list
   */
  @Output() addedCharacter = new EventEmitter<CharacterDTO>();
    /**
   * Output representa salida de datos hacía el componente padre character-list
   */
  @Output() showCharacterDetail = new EventEmitter<number>();
/**
 * Constructor de la clase
 */
  constructor() { }
/**
 * Metodo para emitir un personaje en el carrito de favoritos
 */
  onAddToCart() {
    this.addedCharacter.emit(this.character);
  }
/**
 * Metodo para emitir el detalle del personaje
 */
  onShowDetail() {
    console.log('Estoy en detalle');
    this.showCharacterDetail.emit(this.character.id);
  }
}
