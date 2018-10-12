/*2. Importamos los modulos necesarios para configurar el ROUTER */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

/*3. Importamos los componentes que deseamos se muestren en la navegacion */
import { homeComponent } from './home/home.component';
import { nosotrosComponent } from './nosotros/nosotros.component';
import { mercadoComp } from './mercado/mercado.component';
import { comPipes } from './pipes/pipes.component';
import { formComponent } from './formularios/forms.component';
import { ngTemplate } from './ngtemplate/ngtemplate.component';

/*4. Definimos las rutas de navegacion 
- Se guardan en una array
- con path, se definen las url y el componente que llaman
- path: '' =  es el root o la pagina principal
- path: '**' = Cuando es pagina 404
*/
const appRoutes: Routes = [
    //Inicio
    {path: '', component: homeComponent},
    {path: 'home-page', component: homeComponent},
    {path: 'nosotros-page', component: nosotrosComponent},
    {path: 'mercado-page', component: mercadoComp},
    {path: 'pipes', component: comPipes},
    {path: 'formulario', component: formComponent},
    {path: 'ngtemplate', component: ngTemplate},
    //Pasar parametros por URL - agregamos al final de la ur /:algo . Tener cuidado que el nombre de parametro no esta en la URL original no funcionara!!
    //{path: 'nosotros-page/:id/:marca', component: nosotrosComponent},    
    {path: 'nosotros-page/:id', component: nosotrosComponent}, 
    //Pagina 404
    {path: '**', component: homeComponent}

];

/*5. Configuracion del router */
export const appRoutingProviders: any[] = [];

/*6. Aqui llamamos la clase que contiene las rutas para aplicarlas al modulo del router */
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);