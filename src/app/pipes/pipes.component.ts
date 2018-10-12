import {Component} from '@angular/core';

@Component({
    selector: 'pipes-box',
    templateUrl: 'pipes.component.html',
    styleUrls: ['pipes.component.css']
})

export class comPipes{

    public titulo:string;

    public fecha:any;

    public lastname:string;

    constructor(){
        this.titulo = 'TIPOS DE PIPES';
        this.lastname = "Texto transformado con la pipe de caracter"
        // pipe de tipo fecha, la definimos asi y en parentesis la fecha indicada, Tener en cuenta Enero comienza en mes 0
        this.fecha = new Date(2018, 8, 11);
    }
}