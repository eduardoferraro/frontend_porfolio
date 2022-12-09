import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionModel } from 'src/app/modelos/educacion-model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-editar-educacion',
    templateUrl: './editar-educacion.component.html',
    styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

    educacionModel: EducacionModel = null;
    isLogged = false;
    urlImagenActual = ''; 
    
    constructor(
        private educacionService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router,
        public imagenService: ImagenService, private tokenService: TokenService) {

    }


    ngOnInit(): void {

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

        const id = this.activatedRouter.snapshot.params['id'];
        this.educacionService.detail(id).subscribe(
            data => {
                this.urlImagenActual = data.imagenInstitucion;
                this.educacionModel = data;              
            }, err => {
                alert("Error modificando educacion");
                this.router.navigate(['']);
            }
        )
        this.imagenService.url = '';   
    }



    //obtiene la url de firebase de la imagen
    uploadImagen($event: any) {
        /* const id = this.activatedRouter.snapshot.params['id'];
        const nombre = "educacion_" + id;
        this.imagenService.uploadImagen($event, nombre); */
        

        console.log('imagen actual: ' + this.urlImagenActual);
        const txtRandom = Math.random().toString(36).substring(2);
        const nombre = "educacion_" + txtRandom;
        this.imagenService.uploadImagen($event, nombre);
        
    }

    
    
    onUpdate(): void {

        //no podria pasar nunca
        if (this.imagenService.url != '') {
            this.educacionModel.imagenInstitucion = this.imagenService.url;
        }
        

        const id = this.activatedRouter.snapshot.params['id'];
        this.educacionService.update(id, this.educacionModel).subscribe(
            data => {
                console.log(id)

                this.router.navigate(['']);
            }, err => {
                alert("Error modificando el item de educacion");
                this.router.navigate(['']);
            }
        )

    }


    onCancel(): void {
        this.router.navigate(['']);
    }




}
