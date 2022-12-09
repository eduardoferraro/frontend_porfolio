import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionModel } from 'src/app/modelos/educacion-model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-nueva-educacion',
    templateUrl: './nueva-educacion.component.html',
    styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

    nombreInstitucion: string = '';
    nombreTitulo: string = '';
    anioDesde: string = '';
    anioHasta: string = '';
    mesDesde: string = '';
    imagenInstitucion: string = '';

    //agregado
    isLogged = false;
    //--

    constructor(private educacionService: EducacionService, private router: Router, private tokenService: TokenService,
        public imagenService: ImagenService) { }

    ngOnInit(): void {

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

        this.imagenService.url = '';
    }



    onCreate(): void {

        //agregado v20
        if (this.imagenService.url != '') {
            this.imagenInstitucion = this.imagenService.url;
        }
        //------------
    
        const edu = new EducacionModel(this.nombreInstitucion, this.nombreTitulo, this.anioDesde,
            this.anioHasta, this.imagenInstitucion);

       
        
        this.educacionService.save(edu).subscribe(
            data => {
                this.router.navigate(['']);
            }, err => {
                alert("Error de validacion agregando eduacion. Verificar");
                this.router.navigate(['']);
            }
        )
    }

    onCancel(): void {
        this.router.navigate(['']);
    }

    
    
    //crea un nombre unico y llama al service img para subir el archivo
    uploadImagen($event: any) {
        //const id = this.activatedRouter.snapshot.params['id'];
        const txtRandom =  Math.random().toString(36).substring(2);
        const nombre = "educacion_" + txtRandom;
                        
        this.imagenService.uploadImagen($event, nombre);

    }

}
