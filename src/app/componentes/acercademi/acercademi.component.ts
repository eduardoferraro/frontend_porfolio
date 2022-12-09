import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
    selector: 'app-acercademi',
    templateUrl: './acercademi.component.html',
    styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
    
    personaModel: PersonaModel = null;

    constructor(private personaService: PersonaService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.cargarPersona();
        
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarPersona(): void {
        this.personaService.detail(1).subscribe(data => { this.personaModel = data; })
    }

    

}
