import {Component} from "@angular/core";
import {carsInfo} from "./model/forModel";

@Component({
    selector: 'data-for',
    templateUrl: './directivaFor.html'
})

export class DirectFor{

    public color_state:string;

    private fuente:string;

    public inventario:Array<carsInfo>;

    constructor(){
        // let carsInfo of inventario - quiere decir que de la propiedad tipo Array, saqueme los objetos carInfo disponibles
        this.inventario = [
            new carsInfo('Ferrari', 2015, 100),
            new carsInfo('BMW', 2028, 5000),
            new carsInfo('Porche', 2019, 80000),
            new carsInfo('Wolswagen', 2020, 660)
        ];

        this.fuente = "50px";
        this.color_state = "red";
    }

    ChangeTon(){
        console.log(this.color_state);
    }

    ngOnInit(){
        console.log(this.inventario[1]);
    }
}