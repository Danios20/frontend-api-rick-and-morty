import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  flag: boolean;
  page: number = 1;
  constructor(private characterService: CharacterService) {
    this.flag = true;
   }

  @Input() characters: CharacterDTO[] = []

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

  onLoadMore() {
    this.page ++;
    this.characterService.getAllCharacters(this.page)
    .subscribe(data => {
      this.characters = this.characters.concat(data);
    });
  }
}
