import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor : string;

  constructor(private elementRef : ElementRef) { 
  }
  
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || "red")
  }

  @HostListener('mouseleave') mouseLeave(){
    this.resaltar(null)
  }

  private resaltar( color : string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }


}
