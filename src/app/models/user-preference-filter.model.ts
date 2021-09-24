import {PetTypes} from "./pet-types.enum";
import {Genders} from "./genders.enum";


export interface UserPreferenceFilter {
  name: string;
  type: PetTypes;
  minAge: number;
  maxAge: number;
  gender: Genders;
}
