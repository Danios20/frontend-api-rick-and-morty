import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  activeSideMenu: boolean = false;

  constructor() { }

  // Móstrar/ocultar side menu (mobile)
  toggleSideMenu() {
    this.activeSideMenu = !this.activeSideMenu;
  }

}
