import { Component } from '@angular/core';

@Component({
    selector: 'tipo-d',
    templateUrl: './tipoDatos.component.html'
})

// Tipos de datos, ponemos : y luego los tipos de datos
export class tipoDatos{
    
    public cadena:string = 'solo texto';

    public numeros:number = 400;

    public juego:boolean = false;

    // en los tipos array, tenemos que definir el tipo de dato entre <aqui> any: cualquiera o un tipo de propiedad fijo

    public arreglo:Array<any> = ['Dolares', 600, 'Euros', true];

    // tipo de dato sin especificar propiedad 

    cualquiera:any = 'cualquier tipo de dato'; 
    
}