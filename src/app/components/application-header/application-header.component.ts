import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.css']
})
export class ApplicationHeaderComponent{

  @Input() title: string = 'Main';

  constructor() { }

}
