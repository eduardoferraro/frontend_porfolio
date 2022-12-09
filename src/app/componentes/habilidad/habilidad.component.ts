import { Component, OnInit } from '@angular/core';
import { HabilidadModel } from 'src/app/modelos/habilidad-model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-habilidad',
    templateUrl: './habilidad.component.html',
    styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

    habilidadModel: HabilidadModel[] = [];

    constructor(private habilidadService: HabilidadService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.cargarHabilidad();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarHabilidad(): void {
        this.habilidadService.lista().subscribe(data => { this.habilidadModel = data; })
    }

    borrar(id?: number) {
        if (id != undefined) {
            this.habilidadService.delete(id).subscribe(
                data => {
                    this.cargarHabilidad();
                }, err => {
                    alert("Error al borrar la habilidad");
                }
            )
        }
    }

}
