import { Injectable } from '@angular/core';

@Injectable()

export class llevarProducto{

    /* Este servicion hara dos cosas
        1. Crear un metodo para añadir elementos a una array
        2. Crear un metodo para borrar elementos de la array
    */
    public lista_alimentos = ['Manzana', 'Cerveza'];

    // MEtodo para añadir elementos a la array, recibe un valor que viene del componente

    /* 
        En los parametros que paso en los metodos puedo definir 
        - tipo de dato (String, number)
        - que retornara : Array
        todos estos parametros son como un validador
    */
    addFood(food:string):Array<string>{
        // con push añado elementos
        this.lista_alimentos.push(food);
        //llamo la el metodo de la lista actualizada
        return this.getFood();
    }

    // se crea un metodo para devolver la array con el nuevo valor

    getFood():Array<string>{
        return this.lista_alimentos;
    }

    //Este metodo elimina el item de la lista de array
    delFood(index:number){
        // con splice añado elementos, en splice pasamos 2 parametros 1. el valor por indice 2. cuantas veces quiere que se elimine siempre es 1
        this.lista_alimentos.splice(index, 1);
        //llamo la el metodo de la lista actualizada con el elemento borrado
        return this.getFood();
    }    

}