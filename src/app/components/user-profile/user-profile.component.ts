import {Component} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User = {id: "1", name:"First User", email:"first@gmail.com"};

  constructor() { }

}
