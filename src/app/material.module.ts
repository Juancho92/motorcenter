import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule ({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatStepperModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSliderModule,
        MatTooltipModule 
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatStepperModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSliderModule,
        MatTooltipModule 
    ]
})

export class MaterialModule {}