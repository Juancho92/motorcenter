import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  animations: [
    trigger('slideInOut', [ 
      state('in', style({ transform: 'translateX(0%)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }), 
        animate('1.5s 3s ease-in-out', style({transform: 'translateX(0%)'}))
      ]) 
    ]),
    trigger('slideUpDown', [ 
      state('down', style({ transform: 'translateY(0%)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }), 
        animate(500, style({transform: 'translateY(0%)'}))
      ]) 
    ]),
  ]
})

export class VehiclesComponent implements OnInit {

  @Input() displayRegisterFromSection: boolean;

  @Output() verifyClientFromVehicle = new EventEmitter<{status: boolean, extra: string}>();
  @Output() hideRegisterFromVehicle = new EventEmitter<boolean>();
  @Output() displayMoreFromVehicle = new EventEmitter<boolean>();
  @Output() showSuccessFromVehicle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  //More component
  showMore(status:boolean) {
    this.displayMoreFromVehicle.emit(status);
  }

  //Check if client is registered
  isClientRegistered(status:boolean){
    this.verifyClientFromVehicle.emit({status: status, extra: 'vehicles'});
  }

  //Show list component
  showList(status:boolean){
    this.hideRegisterFromVehicle.emit(!status);
  }

}
