import {Genders} from "../models/genders.enum";
import {PetTypes} from "../models/pet-types.enum";

export interface PetPostRequest {
  name: string;
  birthday: Date;
  gender: number;
  type: number;
  breed: string;
  location: string,
  picture: string;
}

export interface PetPostResponse {
  id: string;
  userID: string;
  name: string;
  birthday: Date;
  gender: Genders;
  type: PetTypes;
  breed: string;
  location: string;
  rating: number;
  numberOfReviews: number;
  picture: string;
}
