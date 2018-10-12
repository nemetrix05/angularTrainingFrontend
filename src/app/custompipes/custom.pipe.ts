/* Pipes personalizadas 
1. Creamos una carpeta Pipes en el directorio principal
2. Importamos el modulo necesario para que funcione la pipe
3. En el decorador del pipe, definimos como se va llamar la pipe
4. Para usarla de manera global, la importamos en el app.module.ts
*/
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    // Nombre de la pipe personalizada
    name: 'convertidor'
})

export class ConvertidorPipe implements PipeTransform{
    // usamos el metodo transform para indicar la pipe
    transform(value, por){
        // Recibimos 2 valores de tipo numerico y los convertimos en enteros con parseInt
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        let result = "La multiplicacion:"+value_one+' + '+value_two+' = '+(value_one * value_two);
        
        // devolvemos la pipe con la operacion
        return result;
    }
}