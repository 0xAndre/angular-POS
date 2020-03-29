import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideComponent } from './main/side/side.component';
import { CardComponent } from './main/card/card.component';
import { EmployeeComponent } from './main/side/employee/employee.component';
import { PayComponent } from './main/side/pay/pay.component';
import { ProductComponent } from './main/side/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideComponent,
    CardComponent,
    EmployeeComponent,
    PayComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
