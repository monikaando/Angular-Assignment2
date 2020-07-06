import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  activeButton = false;
  usernameCreationStatus = "No username created";
  username="";

  ngOnInit(): void {}
  onResetUsername(){
    this.username="";
    this.usernameCreationStatus= "No username created";
  }
  onUpdateUsername(event: Event) {
    this.usernameCreationStatus = (<HTMLInputElement>event.target).value;
      if(this.usernameCreationStatus.length>0 || !this.onResetUsername){
      this.activeButton = true;
    }
  }
}
//The teacher solution
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-username',
//   templateUrl: './username.component.html',
//   styleUrls: ['./username.component.css']
// })
// export class UsernameComponent {
//   username=''
// }
