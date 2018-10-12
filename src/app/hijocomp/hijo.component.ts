// 1. Se debe importar en el componente @Input para traer propiedades de otro componente

// @output, se llama para exportar una propiedad, y ser usada en otro componente 

// Se importa el modulo EvenEmitter, para exportar eventos en el decorador @output

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tag-hijo',
    template: `
        <h1>Ejercicio con decorador @input</h1>
        <div>
            Este es el {{title}}
            <ul>
                <li>{{propiedad_ext.cargo}}</li>
            </ul>
            <button type="button" (click)="enviar()">Click para sacar el output</button>
        </div>
    ` 
})

export class hijoComponent{
    public title:string;

    /* 
        2. el decorador @input, tiene como objetivo traer propiedades que son declaradas en otro componente por medio de la vista padre.

        3. Tambien se puede cambiar el nombre de la propiedad en el decorador @Input(nuevonombre propiedad)
    */

    @Input('valf')
    propiedad_ext:any;

    /*
        - Aqui definimos una propiedad @output, que va lanzar un evento tipo EventEmmiter

        - Para que se pueda lanzar un @output se debe lanzar el evento desde la plantilla del componente
    */

    @Output()
    desde_aqui = new EventEmitter();

    constructor(){
        this.title = "Componente Hijo";
    }

    ngOnInit(){
        console.log(this.propiedad_ext);

        // Tambien podemos llamar el metodo que envia los datos, solo iniciandolo en el ngonninit

        this.enviar();
    }

    // aqui recibe el evento que tiene el output. Y ponemos lo que queremos enviarle al otro componente.
    enviar(){
        this.desde_aqui.emit({
            texto: 'texto del output'
        });
    }

}



