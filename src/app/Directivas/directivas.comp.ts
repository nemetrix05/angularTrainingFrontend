import {Component} from '@angular/core';

@Component({
    selector: 'data-conf',
    templateUrl: './directivas.html'
})

export class DirectivasC {
    
    public Equipo1:string;
    public Titulos1:number;

    constructor(){
        // Aqui definimos los valores para hacer la directiva
        this.Equipo1 = "Real madrid";
        this.Titulos1 = 30;
    }
    cambioTeam(value){
        this.Equipo1 = value;
    }

    ngOnInit(){
    }
}



