import { Injectable, inject } from '@angular/core';
import { Observable, map, retry } from 'rxjs';
import { IUser } from '../models/feature.models';
import { HttpClient } from '@angular/common/http';
import { ICRUD } from './user.service.interface';

@Injectable({
  providedIn: 'root',
})

//Solid (D) Principio de Inversión de Dependencia
export class UserService implements ICRUD<IUser> {
  private readonly http = inject(HttpClient);
  // baseUrl ='https://virtserver.swaggerhub.com/FGQUEIROLO/bci-users/1.0.0/';
  baseUrl = 'http://localhost:8882';

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`).pipe(
      retry(1),
      map((res: IUser[]) => res)
    );
  }

  create(data: IUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, data);
  }

  update(data: IUser): Observable<any> {
    const url = `${this.baseUrl}/users/${data.id}`;
    console
    return this.http.put(url, data);
  }

  delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete(url);
  }
}
