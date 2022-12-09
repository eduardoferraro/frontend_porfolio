import { Component, OnInit } from '@angular/core';
import { ExperienciaModel } from 'src/app/modelos/experiencia-model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-experiencia',
    templateUrl: './experiencia.component.html',
    styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

    experienciaModel: ExperienciaModel[] = [];

    constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.cargarExperiencia();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarExperiencia(): void {
        this.experienciaService.lista().subscribe(data => { this.experienciaModel = data; })
    }

    borrar(id?: number) {
        if (id != undefined) {
            this.experienciaService.delete(id).subscribe(
                data => {
                    this.cargarExperiencia();
                }, err => {
                    alert("Error al borrar la experiencia");
                }
            )
        }
    }

}
