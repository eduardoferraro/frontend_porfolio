import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionModel } from '../modelos/educacion-model';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
    URL = 'http://localhost:8080/educacion/';


    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<EducacionModel[]> {
        return this.httpClient.get<EducacionModel[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<EducacionModel> {
        return this.httpClient.get<EducacionModel>(this.URL + `detalle/${id}`);
    }

    public save(educacion: EducacionModel): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'crear', educacion);
    }

    public update(id: number, educacion: EducacionModel): Observable<any> {
        return this.httpClient.put<any>(this.URL + `editar/${id}`, educacion);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }
}
