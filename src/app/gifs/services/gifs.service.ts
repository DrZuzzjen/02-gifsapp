import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string ='nOzq8an0WO24xCAWYQmiLaO4iuEg3FPv'

  //Crear propiedad privada para almacenar los strings
  private _historial: string[] = [];

  //TODO: cambiar any por su tipo correspondiente.
  public resultados: Gif[] = [];

  //Hacemos el getter
  get historial(): string[] {
      //De esta manera rompemos la relacion y entrega un Array 
      //nuevo que previene mutaciones.
    return [...this._historial];
  }

  constructor( private http: HttpClient ){

    //Local Storage - Metodo Cortos
    this._historial = JSON.parse(localStorage.getItem("historial") !) || [] !;
    this.resultados = JSON.parse(localStorage.getItem("resultados") !) || [] !;
    //Metodo largo para
/*     if (localStorage.getItem("historial")){
      this._historial = JSON.parse(localStorage.getItem("historial") !)
    } */
    

  }

  //Funcion que almacena las buquedas empujandolas a un string
  buscarGifs(query: string){
    //convertir los datos a minuscula
    query = query.trim().toLocaleLowerCase()

    //No repetir busquedas 
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
       //Limitar a 10 resultados
    this._historial = this._historial.splice(0,10)


//Guardar en el local storage 
//JSON.stringify convierte en string el contenido del objeto
    localStorage.setItem('historial', JSON.stringify(this._historial))
    
  }


    //Llamar los datos de la API
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=nOzq8an0WO24xCAWYQmiLaO4iuEg3FPv&q=${query}limit=10`)
    .subscribe( (resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });
        

   
  }
}
