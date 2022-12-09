import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoModel } from 'src/app/modelos/proyecto-model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  
    proyectoModel: ProyectoModel = null;
    isLogged = false;

    constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute,
        private router: Router, private tokenService: TokenService) {

    }

    

    ngOnInit(): void {

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

        const id = this.activatedRouter.snapshot.params['id'];
        this.proyectoService.detail(id).subscribe(
            data => {
                this.proyectoModel = data;
            }, err => {
                alert("Error al eliminar el proyecto");
                this.router.navigate(['']);
            }
        )
    
    }



    onUpdate(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.proyectoService.update(id, this.proyectoModel).subscribe(
            data => {
                alert("Proyecto modificada");
                console.log(id)
                this.router.navigate(['']);
            }, err => {
                alert("Error modificando el proyecto");
                this.router.navigate(['']);
            }
        )
    }

    onCancel(): void {
        this.router.navigate(['']);
    }


}
