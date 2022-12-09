import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaModel } from 'src/app/modelos/persona.model';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-editar-acercademi',
    templateUrl: './editar-acercademi.component.html',
    styleUrls: ['./editar-acercademi.component.css']
})
export class EditarAcercademiComponent implements OnInit {

    personaModel: PersonaModel = null;
    isLogged = false;

    constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router,
        public imagenService: ImagenService, private tokenService: TokenService) {

    }

    ngOnInit(): void {

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

               
        const id = this.activatedRouter.snapshot.params['id'];
        this.personaService.detail(id).subscribe(
            data => {
                console.log(id)
                this.personaModel = data;
            }, err => {
                alert("Error modificando persona");
                this.router.navigate(['']);
            }
        )
        
        this.imagenService.url = '';
    }



    onUpdate(): void {

       //--------------
         if (this.imagenService.url != '') {
            this.personaModel.imagenPersona = this.imagenService.url;
        }
        //------------ 
        
        const id = this.activatedRouter.snapshot.params['id'];      
        this.personaService.update(id, this.personaModel).subscribe(
            data => {
                this.router.navigate(['']);
            }, err => {
                alert("Error modificando persona");
                this.router.navigate(['']);
            }
        )
        
    }

    
    onCancel(): void {
        this.router.navigate(['']);
    }

    //obtiene la url de firebase de la imagen
    uploadImagen($event: any) {
        const id = this.activatedRouter.snapshot.params['id'];
        const nombre = "foto_de_perfil_" + id;
        this.imagenService.uploadImagen($event, nombre);

    }

}
