import { Component, } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {
  //Traemos los resultados
  get resultados(){
    return this.gifService.resultados;
  }


  //Llamamos al servicio
  constructor( private gifService:GifsService) { }



}
