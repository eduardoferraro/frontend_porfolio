import { Component, OnInit } from '@angular/core';
import { EducacionModel } from 'src/app/modelos/educacion-model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-educacion',
    templateUrl: './educacion.component.html',
    styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

    educacionModel: EducacionModel[] = [];

    constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.cargarEducacion();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarEducacion(): void {
        this.educacionService.lista().subscribe(data => { this.educacionModel = data; })
    }

    borrar(id?: number) {
        if (id != undefined) {
            this.educacionService.delete(id).subscribe(
                data => {
                    this.cargarEducacion();
                }, err => {
                    alert("Error al borrar la educacion");
                }
            )
        }
    }


}



