import { Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { EventosComponent } from './components/components/eventos/eventos.component';
import { FundamentosRxJSComponent } from './components/components/fundamentos-rx-js/fundamentos-rx-js.component';
import { ObservablesComponent } from './components/components/observables/observables.component';
import { OperadoresComponent } from './components/components/operadores/operadores.component';
import { ReactiveComponent } from './components/components/reactive/reactive.component';
import { HomeComponent } from './components/components/home/home.component';
// rutas de navegacion
export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'reactive programming', component: ReactiveComponent},
    {path:'fundamentos', component: FundamentosRxJSComponent},
    {path:'operadores básicos', component: OperadoresComponent},
    {path:'Combinacion de observables', component: ObservablesComponent},
    {path:'Sincronización de eventos', component: EventosComponent},

];
