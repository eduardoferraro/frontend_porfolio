import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { HabilidadModel } from 'src/app/modelos/habilidad-model';

@Component({
    selector: 'app-nueva-habilidad',
    templateUrl: './nueva-habilidad.component.html',
    styleUrls: ['./nueva-habilidad.component.css']
})


export class NuevaHabilidadComponent implements OnInit {

    nombreHabilidad: string = '';
    cantidadHabilidad: number = null;
    
    constructor(private habilidadService: HabilidadService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const exp = new HabilidadModel(this.nombreHabilidad, this.cantidadHabilidad);

        this.habilidadService.save(exp).subscribe(
            data => {
                this.router.navigate(['']);
            }, err => {
                alert("Error al agregar habilidad. Verificar");
                this.router.navigate(['']);
            }
        )
    }

    onCancel(): void {
        this.router.navigate(['']);
    }


}
