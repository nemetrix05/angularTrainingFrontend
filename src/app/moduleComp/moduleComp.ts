import {Component} from '@angular/core';
// importamos la clase con el modelo de datos declarados
import {List} from './modeloComp';

@Component({
    selector: 'module-l',
    templateUrl: './moduleComp.html'
})

export class ModuleComp {

     // aqui creamos una propiedad y le asignamos como valor la clase que exportamos, que es un objeto
    public funciontype:string;
    public datos:List;

    // Agrega la clase como tipo de dato, que va guardar en la array
    public arreglos:Array<List>;

    constructor(){
        // con new le enviamos un nuevo valor al modelo list, que estan por parametros
        this.datos = new List('Andres', 40);
        this.arreglos = [
            new List('Sofia', 90),
            new List('Pablo', 20),
            new List('Juan', 20)
        ]

        this.funciontype = "win";
        
        this.cambioString();
    }

    cambioString(){
        this.funciontype = "cambio valor";
    }
    
    ngOnInit(){
        console.log(this.datos);
        // con llaves especificamos la pocision del array [] que queremos mostrar
        console.log(this.arreglos[0]);
        // aqui van los resultados de las operaciones
        console.log(this.funciontype);

    }

    

}
