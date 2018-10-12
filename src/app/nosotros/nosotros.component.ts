import { Component } from '@angular/core';
// Aqui importamos  los servicios para que el router permita pasar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'box-nosotros',
    templateUrl: './nosotros.component.html'
})

export class nosotrosComponent{

    public titulo = 'Seccion Nosotros';
    public listas = ['valorcambiado', 'valorcambiado', 500];
    // definimos la variable que rescata los parametros
    public parametro;
    //public parametro2;

    constructor(
        // en el constructor se llaman las clases de parametros del router
        private _route: ActivatedRoute,
       // esta propiedad se encarga de redirigir
        private _router: Router
    ){}

    // Metodo que retorna a una url y un parametro
    retornar(){
        let arreglo = this.listas[1];
        // se usa la propieda _route.navigate(['urlpagina',parametro]); para indicar a que pagina va ir
        this._router.navigate(['/nosotros-page',arreglo]);
    }

    ngOnInit(){
        // Aqui recogemos los parametros de la url, usamos una funcion de callback pero la de flecha que permite salir de la funcion y buscar la propiedad en la clase
        this._route.params.forEach((params: Params) => {
            // Aqui asignamos el valor params a parametro, con esto recogeria los datos que paso por url de este componente.
            this.parametro = params['id'];
            //this.parametro2 = params['marca'];
            console.log(params);
        });
    }


}