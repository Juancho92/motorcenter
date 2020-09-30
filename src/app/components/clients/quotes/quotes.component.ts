import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponent } from '../client-dialog/client-dialog.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  vehicleIndex: number;
  displaySaveBtn: boolean = false;
  formVehicleButton: string = 'edit';
  showColorPalette: boolean = false;
  colorDetails: any;
  colorPickerPosition: any;
  enableReadonly: any;

  clientQuotes = [
    {vehicleName: 'Hyundai Atos', vehicleVersion:'sedan', vehicleColorCode:'#212121', vehicleColorName:'Negro', vehiclePrice:50000, vehicleInitialPrice:50000, executive: 'asdasdasd', state: [{date:'2020-02-12T12:47:55Z', description:'Compra del vehículo', status:true}, {date:'2020-02-12T12:47:55Z', description:'Compra del vehículo', status:true}] },
    {vehicleName: 'Hyundai Atos', vehicleVersion:'sedan', vehicleColorCode:'#212121', vehicleColorName:'Negro', vehiclePrice:50000, vehicleInitialPrice:50000, executive: 'asdasdasd' },
    {vehicleName: 'Hyundai Atos', vehicleVersion:'sedan', vehicleColorCode:'#212121', vehicleColorName:'Negro', vehiclePrice:50000, vehicleInitialPrice:50000, executive: 'asdasdasd' }
  ];

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //Enable vehicle form fields editing
  enableEditing(i:any){

    if (count == 0){
      let items = {'kmFormControl':this.controlArray.controls[i].get('kmFormControl').value, 'colorFormControl':this.controlArray.controls[i].get('colorFormControl').value};
      sessionStorage.setItem("VehicleForm", JSON.stringify(items));
      this.colorHex = this.clientVehicles[i].colorCode;
      color = this.colorHex;
      index = i;
    }

    if(index === i) {
      this.vehicleIndex = i;
      this.enableReadonly = false;
      count = count+1;

      if(document.getElementById('saveIconBtn-'+i)){
        const dialogRef = this.dialog.open(ClientDialogComponent, {
          data: {tittle: '¿Seguro que desea deshacer los cambios?', format:'simple', content: 'Todos los cambios se perderán'}
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result.data){
            var formValues = JSON.parse(sessionStorage.getItem("VehicleForm"));
            this.controlArray.controls[i].get('kmFormControl').setValue(formValues.kmFormControl);
            this.controlArray.controls[i].get('colorFormControl').setValue(formValues.colorFormControl);
            sessionStorage.removeItem("VehicleForm");
            this.colorHex = color;
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
    }else{
      count = 0;
      var formValues = JSON.parse(sessionStorage.getItem("VehicleForm"));
      this.controlArray.controls[index].get('kmFormControl').setValue(formValues.kmFormControl);
      this.controlArray.controls[index].get('colorFormControl').setValue(formValues.colorFormControl);
      sessionStorage.removeItem("VehicleForm");
      this.displaySaveBtn = false;
      this.enableEditing(i);
    }
  }

  //Save vehicle info
  saveEditedQuote(i: any){
    this.vehicleIndex = i;
    let formValues = JSON.parse(sessionStorage.getItem("VehicleForm"));
    if(this.controlArray.controls[i].get('colorFormControl').value !== formValues.colorFormControl){
      this.dialogContent = 'No olvide registrar el cambio en la SUNARP para que podamos validarlo';
    } else {
      this.dialogContent = 'Esta decisión no se puede modificar luego';
    }

    const dialogRef = this.dialog.open(ClientDialogComponent, {
      data: {tittle: '¿Seguro que desea guardar los cambios?', format:'simple', content: this.dialogContent}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.data){
        sessionStorage.removeItem("VehicleForm");
        this.enableReadonly = true;
        this.displaySaveBtn = false;
        this.formVehicleButton = 'edit';
        count = 0;
      }
    });
  }

  //Color picker methods
  openColorPicker(i: any){
    if(!this.enableReadonly){
      this.vehicleIndex = i;
      this.showColorPalette = true;
      let viewportOffset = document.getElementById('colorPickerInput-'+i).getBoundingClientRect();
      const { top, left } = viewportOffset;
      this.colorPickerPosition = { top: top, left: left };
      this.colorDetails = { name: this.controlArray.controls[i].get('colorFormControl').value, hex: this.colorHex };
    }
  }

  //Set vehicle and input color
  setColor($event: any, i: any){
    this.controlArray.controls[i].get('colorFormControl').setValue($event.event);
    this.colorHex = $event.extra;
  }

  //Close color picker
  closeColorPicker(status:boolean){
    this.showColorPalette = !status;
  }

  //Show km information
  moreInfo(){
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      data: {tittle: '', description:'kilometraje', format:'simple', content: ['Mantenga actualizado el kilometraje de su vehículo', 'Puede obtener mantenimientos con descuento, Motor puntos y más', '¡QUÉ ESPERA, ACTUALICE YA!'], info: true}
    });
  }
}
