// llamo el modulo para crear componentes
import { Component } from '@angular/core';

@Component({
    selector: 'div-tl',
    // con la propiedad template mostramos inline la plantilla, con comillas invertidas las pintamos
    template: `
        <h1>Llamado en linea</h1>
        <p>
            {{bodytext}}
        </p>
        <car-box></car-box>
    `
    /* Si quiero mostrar una plantilla aparte solo agrego
    
    temnplateUrl: './rutadetemplatehtml

    para estilos:
    styleUrls: ['./app.component.css']'
    
    */
})
// sin punto y coma

// Exportamos el componente 
export class InlineComponent{
    // paso las propiedades de forma publica con public antes de enviar
    public bodytext = 'Texto parrafo';
}
