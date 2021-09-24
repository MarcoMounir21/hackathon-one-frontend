import {Genders} from "./genders.enum";
import {PetTypes} from "./pet-types.enum";

export interface Pet {
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
