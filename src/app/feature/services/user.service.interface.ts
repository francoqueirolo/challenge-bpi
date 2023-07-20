import { Observable } from "rxjs";

export interface ICRUD<T> {
  getAll(): Observable<T[]>;
  create(data: T): Observable<any>;
  update(data: T): Observable<any>;
  delete(id: string): Observable<any>;
}
