import { Component, OnInit } from '@angular/core';
import { ProyectoModel } from 'src/app/modelos/proyecto-model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

    proyectoModel: ProyectoModel[] = [];

    constructor(private proyectoService: ProyectoService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.cargarProyecto();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarProyecto(): void {
        this.proyectoService.lista().subscribe(data => { this.proyectoModel = data; })
    }

    borrar(id?: number) {
        if (id != undefined) {
            this.proyectoService.delete(id).subscribe(
                data => {
                    this.cargarProyecto();
                }, err => {
                    alert("Error al borrar el proyecto");
                }
            )
        }
    }

}
