import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProyectoModel } from '../modelos/proyecto-model';

@Injectable({
    providedIn: 'root'
})

export class ProyectoService {

    URL = 'http://localhost:8080/proyecto/';


    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<ProyectoModel[]> {
        return this.httpClient.get<ProyectoModel[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<ProyectoModel> {
        return this.httpClient.get<ProyectoModel>(this.URL + `detalle/${id}`);
    }

    public save(proyecto: ProyectoModel): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'crear', proyecto);
    }

    public update(id: number, proyecto: ProyectoModel): Observable<any> {
        return this.httpClient.put<any>(this.URL + `editar/${id}`, proyecto);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }
}
