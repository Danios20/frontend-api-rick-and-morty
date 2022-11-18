import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeSideMenu: boolean = false;
  counter = 0;

  constructor(
     private storeService: StoreService
     ) { }
  ngOnInit(): void {
    this.storeService.myCart$.subscribe(character => {
    this.counter = character.length;
    });
  }

  // Móstrar/ocultar side menu (mobile)
  toggleSideMenu() {
    this.activeSideMenu = !this.activeSideMenu;
  }

}
