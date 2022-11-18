import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterDTO } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // Personajes agregados al carrito
  private characterCart: CharacterDTO[] = [];
  private myCart = new BehaviorSubject<CharacterDTO[]>([]);

  myCart$ = this.myCart.asObservable()

  // Total del carrito
  total: number = 0;

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

  saveStorage(character: CharacterDTO[]) {
    localStorage.setItem('characterCart', JSON.stringify(character));
  }

}
