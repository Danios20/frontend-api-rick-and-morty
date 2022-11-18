import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  img: string = ''


  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
  };

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>()
  imageDefault: string = './assets/images/default.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  imgLoad() {
    this.loaded.emit(this.img)
  }

  // Mostrar una imagen por defecto si hay un error al cargar la original
  imgError() {
    this.img = this.imageDefault;
  }

}
