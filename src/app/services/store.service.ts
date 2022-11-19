import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterDTO } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
/**
 * Clase del servicio que contiene la logica
 */
export class StoreService {
  // Personajes agregados al carrito
  private characterCart: CharacterDTO[] = [];
  private myCart = new BehaviorSubject<CharacterDTO[]>([]);
// obsrvador
  myCart$ = this.myCart.asObservable()

// Costructor de la clase
  constructor() { }

    // Agregar un personaje al carrito
  addToCart(character: CharacterDTO) {
    this.characterCart.push(character);
    this.saveStorage(this.characterCart);
    this.myCart.next(this.characterCart);
  }

   // Getter characterCart
   getCharacterCart() {
    return this.characterCart;
  }
/**
 *Metodo que almacena un personaje en el Store
 * @param character
 */
  saveStorage(character: CharacterDTO[]) {
    localStorage.setItem('characterCart', JSON.stringify(character));
  }

}
