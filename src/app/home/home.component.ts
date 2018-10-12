import { Component } from '@angular/core';
// Importamos la clase del servicio en el componente
import { ResultadoService } from '../services/operacion.service';

@Component({
    selector: 'box-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    // Agregamos la prop - providers para instanciar el servicio
    providers: [ResultadoService]
})

export class homeComponent{
    public titulo:string;
    public listas:Array<any>;

    public showv:any;

    constructor(
        // creamos una propiedad que instance la clase del servicio, es decir esta variable es de tipo clase de servicio
        private _resultadoS : ResultadoService
    ){
        this.titulo = 'Seccion Home';
        this.listas = ['valor1', 'valor2', 300];
        this.showv = this.muestreo();
    }

    muestreo(){
        return this._resultadoS.saldo();
    }

    ngOnInit(){
        console.log(this._resultadoS.saldo());
    }

}