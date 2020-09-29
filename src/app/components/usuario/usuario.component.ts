import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params
      .subscribe( params =>{
        console.log("Ruta padre!");
        console.log(params);
      })
  }

  ngOnInit(): void {
  }

}
