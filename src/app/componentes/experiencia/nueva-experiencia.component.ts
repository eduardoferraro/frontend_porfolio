import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ExperienciaModel } from 'src/app/modelos/experiencia-model';

@Component({
    selector: 'app-nueva-experiencia',
    templateUrl: './nueva-experiencia.component.html',
    styleUrls: ['./nueva-experiencia.component.css']
})


export class NuevaExperienciaComponent implements OnInit {

    nombreEmpresa: string = '';
    descripcionExperiencia: string = '';
    anioDesde: string = '';
    anioHasta: string = '';
    mesDesde: string = '';
    mesHasta: string = '';
    esActual: boolean = false;


    constructor(private experienciaService: ExperienciaService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const exp = new ExperienciaModel(this.nombreEmpresa, this.descripcionExperiencia, this.anioDesde,
            this.anioHasta, this.mesDesde, this.mesHasta, this.esActual);

        this.experienciaService.save(exp).subscribe(
            data => {
                this.router.navigate(['']);
            }, err => {
                alert("Error al agregar experiencia. Verificar");
                this.router.navigate(['']);
            }
        )
    }

    onCancel(): void {
        this.router.navigate(['']);
    }


}
