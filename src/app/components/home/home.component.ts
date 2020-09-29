import { Component, OnInit, OnChanges, DoCheck,AfterContentInit,
         AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy }
 from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <app-classes></app-classes>
    <hr>
    <h3>Directiva personalizada</h3>
    <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Escriba un color y presione enter</span>
        </div>
        <input (keyup.enter)="setColor(color.value);" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" #color>
    </div>
    <!-- <button class="btn btn-primary" (click)="setColor(color);">Dar color</button> -->
    <p>Pueden ser colores con el codigo Hexadecimal.</p>
    <p>*Se esta cambiando el fondo del texto.</p>
    <p [appResaltado]="colorEn">
        HOLA MUNDO
    </p>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit,OnChanges, DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }




  colorEn = ''

  setColor(color :string){
    this.colorEn = color;
  }

}
