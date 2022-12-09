import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadModel } from '../modelos/habilidad-model';

@Injectable({
    providedIn: 'root'
})

export class HabilidadService {

    URL = 'http://localhost:8080/habilidad/';


    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<HabilidadModel[]> {
        return this.httpClient.get<HabilidadModel[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<HabilidadModel> {
        return this.httpClient.get<HabilidadModel>(this.URL + `detalle/${id}`);
    }

    public save(habilidad: HabilidadModel): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'crear', habilidad);
    }

    public update(id: number, habilidad: HabilidadModel): Observable<any> {
        return this.httpClient.put<any>(this.URL + `editar/${id}`, habilidad);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }
}
