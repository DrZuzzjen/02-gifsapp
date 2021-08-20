import { Component, ViewChild, ElementRef } from '@angular/core';
import {GifsService} from '../services/gifs.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  constructor(private gifService:GifsService){

  }
  
  buscar(termino:string) {
    console.log(this.txtBuscar);
    
    const valor = this.txtBuscar.nativeElement.value
  
    this.gifService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value ='';
  }



}


