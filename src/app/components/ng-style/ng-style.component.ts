import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Hola mundo... esta es una etiqueta.
    </p>
    <button class=" btn btn-danger mr-5">
      <i (click)="changesiZe(false)" class="fa fa-3x fa-minus "></i>
    </button>
    <button class=" btn btn-success">
      <i (click)="changesiZe(true)" class="fa fa-3x fa-plus"></i>
    </button>
    
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  size : number = 15;

  constructor() { }

  ngOnInit(): void {
  }


  changesiZe(flag: boolean){
      if(flag){
        this.size += 10
      }else{
        let i = this.size
        if( i > 10){
          this.size -= 5
      }else{
        console.log("tamaño minimo");
      }
    }
    
  }


}
