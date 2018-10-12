import { Component } from '@angular/core';

@Component({
    selector: 'tag-ng',
    templateUrl: 'ngtemplate.component.html',
    styleUrls: ['ngtemplate.component.css']  
})

export class ngTemplate{
    
    public nombre:string;
    private switch:boolean;
    public arreglo:any;

    public resoutput;

    constructor(){
        //5. Puedo pasarle estas propiedades al componente hijo o el que tiene el decorador
        this.nombre = "Plantillas NG Template";
        this.switch = true;
        this.arreglo = {
            "nombre":"Andres",
            "cargo":"Web UI"
        }
    }

    ngOnInit(){
        console.log(this.switch);
    }

    encender(inst){
        this.switch = inst;
        console.log(this.switch);
    }

    apagar(inst_2){
        this.switch = inst_2;
        console.log(this.switch);
    }

    // Aqui recibimos los datos de la propiedad enviada por output desde el componente hijo, se crea un metodo que recibe los datos por medio de la plantilla.

    getdatos(event){
        this.resoutput = event;
        console.log(this.resoutput);
    }

}
