import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponent } from '../client-dialog/client-dialog.component';

let count = 0;

@Component({
  selector: 'app-client-vehicles',
  templateUrl: './client-vehicles.component.html',
  styleUrls: ['./client-vehicles.component.scss']
})
export class ClientVehiclesComponent implements OnInit {
  VehicleFormGroup: FormGroup;
  vehicleName: string = 'Random Vehicle brand and model';
  vehicleRelation: string  = 'Propietario';
  vehiclePlate: string = 'A5T-3RD';
  vehicleVIN: string = 'LJCPCBLCX11000237';
  verhicleYear: number = 2000;
  displaySaveBtn: boolean = false;
  formVehicleButton: string = 'edit';
  enableReadonly: boolean = true;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) {
    //Form validators
    this.VehicleFormGroup = this._formBuilder.group({
      kmFormControl: [{value: 15000, disabled: false}, [Validators.required]],
      colorFormControl: [{value: 'negro', disabled: false}, [Validators.required]]
    });

    //Detect form inputs changes
    this.VehicleFormGroup.valueChanges
    .subscribe(() =>
    {
      var formValues = JSON.parse(sessionStorage.getItem("VehicleForm"));
      if(this.VehicleFormGroup.controls['kmFormControl'].value == formValues[0].km && this.VehicleFormGroup.controls['colorFormControl'].value == formValues[0].color){
        sessionStorage.removeItem("VehicleForm");
        this.enableReadonly = true;
        this.displaySaveBtn = false;
        this.formVehicleButton = 'edit';
        count = 0;
      } else {
        this.formVehicleButton = 'restore';
        this.displaySaveBtn = true;
      }
    });
  }

  ngOnInit(): void {
  }

  //Enable vehicle form fields editing
  enableEditing(){
    if (count == 0){
      var items = [{'km':this.VehicleFormGroup.controls['kmFormControl'].value, 'color':this.VehicleFormGroup.controls['colorFormControl'].value}];
      sessionStorage.setItem("VehicleForm", JSON.stringify(items));
    }
    this.enableReadonly = false;
    count = count+1;

    if(document.getElementById('saveIconBtn')){
      const dialogRef = this.dialog.open(ClientDialogComponent, {
        data: {tittle: '¿Seguro que desea deshacer los cambios?', content: 'Todos los cambios se perderán'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result.data){
          var formValues = JSON.parse(sessionStorage.getItem("VehicleForm"));
          this.VehicleFormGroup.controls['kmFormControl'].setValue(formValues[0].km);
          this.VehicleFormGroup.controls['colorFormControl'].setValue(formValues[0].color);
          sessionStorage.removeItem("VehicleForm");
          this.enableReadonly = true;
          this.displaySaveBtn = false;
          this.formVehicleButton = 'edit';
          count = 0;
        } else {
          this.formVehicleButton = 'restore';
        }
      });
    } else {
      this.formVehicleButton = 'undo';
      if(count > 1){
        sessionStorage.removeItem("VehicleForm");
        this.enableReadonly = true;
        this.displaySaveBtn = false;
        this.formVehicleButton = 'edit';
        count = 0;
      }
    }
  }

  //Save vehicle info
  saveEditedVehicle(){

  }

  //Input permit only numbers
  onlyNumber(evt){
    // Only ASCII charactar in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
  }

}
