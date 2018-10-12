// aqui carga la libreria del componente
import { Component } from '@angular/core';

/* @componente es el decorador que carga las propiedades o metadatos de
1. selector HTML dentro de la plantilla donde cargara el componente
2. La plantilla HTML
3. Los estilos de esa plantilla

*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Aqui exporta la clase y le puede pasar parametros
export class AppComponent {
  title = 'ANGULAR 6 - TEST';
}
