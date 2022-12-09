import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadModel } from 'src/app/modelos/habilidad-model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-editar-habilidad',
    templateUrl: './editar-habilidad.component.html',
    styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

    habilidadModel: HabilidadModel = null;
    isLogged = false;

    constructor(private habilidadService: HabilidadService, private activatedRouter: ActivatedRoute,
        private router: Router, private tokenService: TokenService, public imagenService: ImagenService) {

    }

    

    ngOnInit(): void {

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

        const id = this.activatedRouter.snapshot.params['id'];
        this.habilidadService.detail(id).subscribe(
            data => {
                this.habilidadModel = data;
            }, err => {
                alert("Error al eliminar el item de habilidad");
                this.router.navigate(['']);
            }
        )
    
    }



    onUpdate(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.habilidadService.update(id, this.habilidadModel).subscribe(
            data => {
                //alert("habilidad modificada");
                console.log(id)
                this.router.navigate(['']);
            }, err => {
                alert("Error modificando el item de habilidad");
                this.router.navigate(['']);
            }
        )
    }

    onCancel(): void {
        this.router.navigate(['']);
    }


}
