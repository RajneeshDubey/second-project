import { Component, OnInit, Input } from '@angular/core';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  user: User;
  @Input('user') userObj: User;
  isCollapsed : boolean = true;

  constructor() {

  }

   toggleCollapse()
   {
     this.isCollapsed = !this.isCollapsed;
   }

  ngOnInit() {   // lifecycle hooks
    this.user = {
      name: this.userObj.name,
      building: this.userObj.building,
      address: this.userObj.address,
      phone: this.userObj.phone
    };
  }

}
