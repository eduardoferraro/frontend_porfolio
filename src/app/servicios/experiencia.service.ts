import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaModel } from '../modelos/experiencia-model';

@Injectable({
    providedIn: 'root'
})

export class ExperienciaService {

    URL = 'http://localhost:8080/experiencia/';


    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<ExperienciaModel[]> {
        return this.httpClient.get<ExperienciaModel[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<ExperienciaModel> {
        return this.httpClient.get<ExperienciaModel>(this.URL + `detalle/${id}`);
    }

    public save(experiencia: ExperienciaModel): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'crear', experiencia);
    }

    public update(id: number, experiencia: ExperienciaModel): Observable<any> {
        return this.httpClient.put<any>(this.URL + `editar/${id}`, experiencia);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }
}
