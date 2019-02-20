import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-project';
  user : User;
  inputText : string ="Initial Value";
  constructor()
  {
    this.user = new User();
    this.user.name = "Passing";
    this.user.building = "Data Members";
    this.user.address = "ng6";
    this.user.phone = ["123454321", "567898765"]

  }
}
