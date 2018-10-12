import { Component } from '@angular/core';
import { llevarProducto } from '../services/canasta.service';

@Component({
    selector: 'merque-facil',
    templateUrl: 'mercado.component.html',
    providers:[llevarProducto]
})

export class mercadoComp {
    public Tituloseccion:string;
    // Creo una propiedad que va ser de tipo array
    public list_food:Array<string>;
    // creo la propiedad que va capturar el valor del input
    public new_food:string;

    constructor(
        private _selectorProductos: llevarProducto
    ){
        this.Tituloseccion = 'Choose the vegetables!';
    }

    // en el metodo oninit, que es cuando carga la aplicacion, defino los valores de la array
    ngOnInit(){
        // aqui obtengo la lista con los valores por defecto
        this.list_food = this._selectorProductos.getFood();
    }

    // Este metodo añade el nuevo elemento a la array, le pasamor el parametro new_food que tiene el valor que captura del input por two way
    save_food(){
        this._selectorProductos.addFood(this.new_food);
        // Con esto se limpia el valor del input y queda listo para un nuevo valor
        this.new_food = null;
    }

    delete_food(index:number){
        this._selectorProductos.delFood(index);
    }

}