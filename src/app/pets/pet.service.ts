import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animalCard } from '../animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  protected baseUrl:string="https://61f12139072f86001749f044.mockapi.io/api/v1"

  constructor(private http:HttpClient) {
  }

getAllPets(): Observable<animalCard[]> {
  return this.http.get<animalCard[]>(`${this.baseUrl}/animals`);
  }
 
getPetByID(id:Number): Observable<animalCard | undefined> {
  return this.http.get<animalCard | undefined>(`${this.baseUrl}/animals/${id}`);
    }

}

