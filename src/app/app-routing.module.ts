import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { EditarAcercademiComponent } from './componentes/acercademi/editar-acercademi.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { NuevaHabilidadComponent } from './componentes/habilidad/nueva-habilidad.component';
import { EditarHabilidadComponent } from './componentes/habilidad/editar-habilidad.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';

const routes: Routes = [
    {path:'', component: InicioComponent},
    
    {path:'editaracercademi/:id', component: EditarAcercademiComponent},
    {path:'nuevaexperiencia', component: NuevaExperienciaComponent},
    {path:'editarexperiencia/:id', component: EditarExperienciaComponent},
    {path:'nuevaeducacion', component: NuevaEducacionComponent},
    {path:'editareducacion/:id', component: EditarEducacionComponent},
    {path:'nuevahabilidad', component: NuevaHabilidadComponent},
    {path:'editarhabilidad/:id', component: EditarHabilidadComponent},
    {path:'nuevoproyecto', component: NuevoProyectoComponent},
    {path:'editarproyecto/:id', component: EditarProyectoComponent}
    
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
