// Importamos el modulo para activar los servicios
import { Injectable } from '@angular/core';

// se crea un decorador con el modulo Injectable

@Injectable()

// Luego exportamos la clase con el servicio

export class ResultadoService{

    public ingresos = 500;
    public gastos = 400;
    public saldof:number;

    constructor(){
        if(this.gastos < this.ingresos){
            this.saldof = 100;
        }    
    }
    // creamos un metodo personalizado con el contenido del servicio

    saldo(){
        let intro = "El saldo que queda de 500 menos 400 es:";
        return intro + this.saldof;
    }
    
}