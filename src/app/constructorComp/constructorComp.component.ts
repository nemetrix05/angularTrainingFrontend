import { Component } from '@angular/core';

@Component({
    selector: 'build-c',
    templateUrl: './constructorComp.component.html'
})

export class ConstruCompo {
    // por orden solo se deben definir las variables aqui
    public nombre:string;

    // Usamos el constructor para asignar valor a las var, que se pasan en la clase
    constructor(){
        // Aqui asigmanos el valor con this antes para acceder a el
        this.nombre = 'Andres Cruz';
    }

    // Usamos en metodo ngoninit para guardar funciones o acciones sobre los elementos del constructor, estós se ejecutan luego del constructor

    ngOnInit(){
        // Aqui defino la funcion con los valores this.nombredelafuncion
        this.cambioNombre('Steve Jobs');
        console.log(this.nombre);

        /* Diferencias entre LET Y VAR 
            1. Las dos formas son validas para declarar una funcion
            2. LET solo tiene alcance local, es decir dentro de una funcion o if
            3. VAR es de ambito global puede cambiar dentro o fuera de una funcion o if si se cambia su valor
        */

        // A nivel global
        var a = 900;

        if (a === 900){
            // let solo en un bloque
            let a = 'ya no es numerica';
            console.log('Dentro de una funcion ' + a);
        }

        var a = 300;

        console.log('Fuera de una funcion ' + a);
    }

    // para definir funciones, solo declaramos el nombre de la misma con la misma sintaxis: nombrefuncion(){}

    cambioNombre(cambio){
        this.nombre = cambio;
    }
}

