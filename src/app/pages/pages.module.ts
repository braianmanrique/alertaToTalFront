import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { DetailComponent } from './detail/detail.component';

import { NgOptimizedImage } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component'


@NgModule({
  declarations: [
    DashboardComponent,
    MainpageComponent,
    DetailComponent,
    ReportsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    MaterialModule,
    NgOptimizedImage
  ],
  exports: [
    DashboardComponent,
  MainpageComponent
  ]
})
export class PagesModule { }
