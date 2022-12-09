import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { EditarAcercademiComponent } from './componentes/acercademi/editar-acercademi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { NuevaHabilidadComponent } from './componentes/habilidad/nueva-habilidad.component';
import { EditarHabilidadComponent } from './componentes/habilidad/editar-habilidad.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';


@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        MenuComponent,
        AcercademiComponent,
        ExperienciaComponent,
        EducacionComponent,
        HabilidadComponent,
        ProyectosComponent,
        PiedepaginaComponent,
        
        InicioComponent,
        NuevaExperienciaComponent,
        EditarExperienciaComponent,
        EditarAcercademiComponent,
        EditarEducacionComponent,
        NuevaEducacionComponent,
        NuevaHabilidadComponent,
        EditarHabilidadComponent,
        EditarProyectoComponent,
        NuevoProyectoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideStorage(() => getStorage())
    ],
    providers: [
        interceptorProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
