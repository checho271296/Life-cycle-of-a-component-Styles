import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent implements OnInit {
  
  alert : string ="alert-danger";

  propiedades: Object ={
    danger : true
  }

  loading : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  run(){
    this.loading = true;
    setTimeout(() =>
      this.loading = false,3000)
  }
}
