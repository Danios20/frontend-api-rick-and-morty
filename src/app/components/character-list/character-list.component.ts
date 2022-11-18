import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.model';
import { CharacterService } from '../../services/character.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterCart: CharacterDTO[] = [];
  showCharacterDetail: boolean = false;
  characterChosen!: CharacterDTO;
  flag: boolean;
  page: number = 1;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  @Input() characters: CharacterDTO[] = []
  constructor(
    private characterService: CharacterService,
    private storeService: StoreService
    ) {
    this.flag = true;
    this.characterCart = this.storeService.getCharacterCart();
   }

  ngOnInit(): void {

    this.characterService.getAllCharacters(1)
    .subscribe({
      next: data => {
        this.characters = data;
        console.log('characters :>> ', this.characters);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.flag = false;
      },
    })
  }

   // Recibir el personaje agregado al carrito
   onAddedCharacter(character: CharacterDTO) {
    console.log('character :>> ', character);
    this.storeService.addToCart(character);
    console.log('characterCart :>> ', this.characterCart);
  }

  toggleCharacterDetail() {
    this.showCharacterDetail = !this.showCharacterDetail;
  }

  onShowCharacterDetail(id: number) {
    this.statusDetail = 'loading';
    this.toggleCharacterDetail();
    this.characterService.getCharacter(id)
    .subscribe({
      next: data => {
        this.characterChosen = data;
        this.statusDetail = 'success';
      },
      error: error => {
      window.alert(error);
      this.statusDetail = 'error';
      },
      complete: () => {
        this.flag = false;
      },
    })
  }



  onLoadMore() {
    this.page ++;
    this.characterService.getAllCharacters(this.page)
    .subscribe(data => {
      this.characters = this.characters.concat(data);
    });
  }
}
