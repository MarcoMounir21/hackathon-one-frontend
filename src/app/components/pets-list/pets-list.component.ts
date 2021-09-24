import {Component, OnInit} from '@angular/core';
import {Pet} from "../../models/pet.model";
import {PetTypes} from "../../models/pet-types.enum";
import {Genders} from "../../models/genders.enum";

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[] = [{id: '1', userID:'2', name:'Rocky', type:PetTypes.dog, gender:Genders.male, location:'Cairo', breed:'Retriever', birthday:new Date(), picture:'Something', rating:5, numberOfReviews:10}];
  constructor() { }

  ngOnInit(): void {
  }

}
