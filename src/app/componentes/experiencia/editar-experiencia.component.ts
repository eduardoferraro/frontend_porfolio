import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaModel } from 'src/app/modelos/experiencia-model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-editar-experiencia',
    templateUrl: './editar-experiencia.component.html',
    styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

    experienciaModel: ExperienciaModel = null;
    isLogged = false;

    constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
        private router: Router, private tokenService: TokenService, public imagenService: ImagenService) {

    }

    

    ngOnInit(): void {

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

        const id = this.activatedRouter.snapshot.params['id'];
        this.experienciaService.detail(id).subscribe(
            data => {
                this.experienciaModel = data;
            }, err => {
                alert("Error al eliminar el item de experiencia");
                this.router.navigate(['']);
            }
        )
    
    }



    onUpdate(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.experienciaService.update(id, this.experienciaModel).subscribe(
            data => {
                alert("Experiencia modificada");
                console.log(id)
                this.router.navigate(['']);
            }, err => {
                alert("Error modificando el item de experiencia");
                this.router.navigate(['']);
            }
        )
    }

    onCancel(): void {
        this.router.navigate(['']);
    }


}
