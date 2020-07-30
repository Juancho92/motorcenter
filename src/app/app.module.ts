import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { MainComponent } from './components/main/main.component';
import { VehiclesComponent } from './components/sections/vehicles/vehicles.component';
import { WorkshopComponent } from './components/sections/workshop/workshop.component';
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProfileComponent } from './components/clients/profile/profile.component';
import { NotificationsComponent } from './components/clients/notifications/notifications.component';
import { MotorPointsComponent } from './components/clients/motor-points/motor-points.component';
import { QuotesComponent } from './components/clients/quotes/quotes.component';
import { CalendarComponent } from './components/clients/calendar/calendar.component';
import { PurchasesComponent } from './components/clients/purchases/purchases.component';
import { PromotionsComponent } from './components/clients/promotions/promotions.component';
import { RegisterComponent } from './components/sections/vehicles/register/register.component';
import { BookComponent } from './components/sections/workshop/book/book.component';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './components/sections/vehicles/filter/filter.component';
import { ListComponent } from './components/sections/vehicles/list/list.component';
import { OwlModule } from 'ngx-owl-carousel';
import { MoreComponent } from './components/sections/more/more.component';
import { SuccessComponent } from './components/sections/success/success.component';
import { SideScrollComponent } from './components/sections/side-scroll/side-scroll.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ToolbarComponent } from './components/sections/toolbar/toolbar.component';
import { ServicesComponent } from './components/sections/workshop/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VehiclesComponent,
    WorkshopComponent,
    AboutUsComponent,
    EmployeesComponent,
    ClientsComponent,
    ProfileComponent,
    NotificationsComponent,
    MotorPointsComponent,
    QuotesComponent,
    CalendarComponent,
    PurchasesComponent,
    PromotionsComponent,
    RegisterComponent,
    BookComponent,
    LoginComponent,
    FilterComponent,
    ListComponent,
    MoreComponent,
    SuccessComponent,
    SideScrollComponent,
    SectionsComponent,
    ToolbarComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
