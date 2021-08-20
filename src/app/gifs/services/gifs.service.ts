import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //Crear propiedad privada para almacenar los strings
  private _historial: string[] = [];

  //Hacemos el getter
  get historial(): string[] {
      //De esta manera rompemos la relacion y entrega un Array 
      //nuevo que previene mutaciones.
    return [...this._historial];
  }

  //Funcion que almacena las bsuquedas empujandolas a un string
  buscarGifs(query: string){
    this._historial.unshift(query);

    console.log(this._historial)
  }
}
