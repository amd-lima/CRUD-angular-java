import { Course } from '../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, first, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursesService {

  private readonly API = 'api/courses'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      //delay(2000),
      tap(courses => console.log(courses))
    );
  }

  loadBId(id: string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record:Partial<Course>):Observable<Course>{
    if(record._id){
      return this.update(record)
    }
    return this.create(record)
  }

  private create(record:Partial<Course>){
    return this.httpClient.post<Course>(this.API, record);
  }

  private update(record:Partial<Course>){
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record);
  }
  remove(id: string){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
