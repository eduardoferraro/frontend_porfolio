import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaModel } from '../modelos/persona.model';



@Injectable({
    providedIn: 'root'
})

export class PersonaService {
    URL = "http://localhost:8080/persona/";

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<PersonaModel[]> {
        return this.httpClient.get<PersonaModel[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<PersonaModel> {
        return this.httpClient.get<PersonaModel>(this.URL + `detalle/${id}`);
    }

    public update(id: number, persona: PersonaModel): Observable<any> {
        return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
    }



}
