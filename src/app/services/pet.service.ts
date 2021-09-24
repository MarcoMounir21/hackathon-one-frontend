import { Injectable } from '@angular/core';
import {PetPostRequest, PetPostResponse} from "../dto/pet.dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private URI = 'http://localhost:5001' + ''
  constructor(private http: HttpClient) { }

  addPet(perPostRequest: PetPostRequest) {
    return this.http.post<PetPostResponse>(
      this.URI, perPostRequest
    );
  }
}
