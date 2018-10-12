import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importamos el modulo data-binding que permitira hacer cambios que se replican tanto en la vista como en el componente
import { FormsModule } from '@angular/forms';

// Aqui importamos los componentes sin extension .TS
import { AppComponent } from './app.component';
import { InlineComponent } from './myComponents/templateInline.component';
import { CarComponent } from './carros/carros.component';
import { tipoDatos } from './tipoDatosComp/tipoDatos.component';
import { ConstruCompo } from './constructorComp/constructorComp.component';
import { ModuleComp } from './moduleComp/moduleComp';
import { DirectivasC } from './Directivas/directivas.comp';
import { DirectFor } from './Directivas/directivaFor';
import { ngTemplate } from './ngtemplate/ngtemplate.component';
import { hijoComponent } from './hijocomp/hijo.component';

// Nuevas componentes creadas

import { homeComponent } from './home/home.component';
import { nosotrosComponent } from './nosotros/nosotros.component';
import { mercadoComp } from './mercado/mercado.component';
import { comPipes } from './pipes/pipes.component';
import { formComponent } from './formularios/forms.component';

// 7. Aqui importamos los modulos del Router
import {routing, appRoutingProviders} from './app.routing';

//  Aqui importamos los pipes personalizados
import { ConvertidorPipe } from './custompipes/custom.pipe';

@NgModule({
  declarations: [
    // Aqui declaramos el componente para que pueda ser usado
    AppComponent,
    InlineComponent,
    CarComponent,
    tipoDatos,
    ConstruCompo,
    ModuleComp,
    DirectivasC,
    DirectFor,
    homeComponent,
    nosotrosComponent,
    mercadoComp,
    comPipes,
    ConvertidorPipe,
    formComponent,
    ngTemplate,
    hijoComponent
  ],
  imports: [
    BrowserModule,
    // Aqui ponemos las clases que llama Angular
    FormsModule,
    // Importamos el modulo de rutas
    routing
  ],
  // Aqui importamos el servicio que trae las url, y hacen que funcionen
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
