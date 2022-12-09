import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoModel } from 'src/app/modelos/proyecto-model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
    nombreProyecto: string = '';
    descripcionProyecto: string = '';
    anio: string = '';
    linkProyecto: string = '';



    constructor(private proyectoService: ProyectoService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const pro = new ProyectoModel(this.nombreProyecto, this.descripcionProyecto, this.anio,
            this.linkProyecto);

        this.proyectoService.save(pro).subscribe(
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
