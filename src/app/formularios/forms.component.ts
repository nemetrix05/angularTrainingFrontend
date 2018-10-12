import { Component } from '@angular/core';
//Importamos el modelo de datos para el formulario
import { formModel } from './forms.model';

@Component({
    selector: 'form-box',
    templateUrl: './forms.component.html'
})

export class formComponent{
    public tittle:string;
    public front:formModel;

    // crear propiedad de tipo Array para generar cada objeto en una lista
    public lista:Array<formModel>;

    constructor(){
        this.front = new formModel("","","");
        this.tittle = "Llena los campos del formulario";
        this.lista = [
            new formModel("Luis Gutierres", "674456", "Mensaje usuario 1"),
            new formModel("Andres Cruz", "90786", "Mensaje 2")
        ];
    }

    // Aqui definimos el metodo OnSubmit que recibe los datos del form
    onSubmit(){
        console.log(this.front);
        // Para que guarde los datos enviados del formulario en la array usamos .push
        this.lista.push(this.front);
        // Para vaciar los datos del formulario
        this.front = new formModel("","","");
    }    

    ngOnInit(){
    }
}