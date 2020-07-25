import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  displaySearch:boolean=true;
  displayLogin:boolean=false;
  displayList:boolean=true;
  displayRegister:boolean = false;
  displayMore:boolean=false;
  displaySuccess:boolean=false;
  noRegisteredClient:boolean;
  disableFilter:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  //More component
  showMore(status:boolean) {
    this.displayMore = status;
  }

  //Check if client is registered
  isClientRegistered(status:boolean){
    var nologin = document.getElementById("noLogin");
    if(nologin){      
      this.displayLogin = status;
      this.noRegisteredClient = true;
    } else {
      this.noRegisteredClient = false;
      this.displaySuccess = status;
    }
  }

  //Show register form
  showRegister(status:boolean){
    this.displayList = !status;
    this.displaySearch = !status;
    this.displayRegister = status;
  }

  //Show list
  showList(status:boolean){
    this.displayRegister = !status;
    this.displaySearch = status;
    this.displayList = status;
  }

  //Disable filter
  disableFilterMethod(status:boolean){
    this.disableFilter = status;
  }

  //Success component
  hideSuccess(status:boolean){
    this.displaySuccess = status;
  }

}