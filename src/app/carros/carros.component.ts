import { Component } from '@angular/core';

@Component({
    selector: 'car-box',
    templateUrl: './carros.component.html'
})

export class CarComponent{
    public titulobar = 'LISTA DE CARROS';
    public carroslista = '[BMW, ferrari, porche]';
}