import { Component, OnInit } from '@angular/core';
import {Pet} from "../../models/pet.model";

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[];
  constructor() { }

  ngOnInit(): void {
  }

}
