import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DetailComponent } from './detail/detail.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { authGuard } from '../guards/auth.guard';


const routes: Routes = [
    {path: 'home', 
    component: MainpageComponent,
    // canActivate: [AuthGuard],
    canActivate:[authGuard],
     children:[ 
     { path: '',redirectTo: 'dashboard', pathMatch: 'full'},
     { path: 'dashboard', component: DashboardComponent },
     { path: 'reports', component: ReportsComponent },
     { path: 'settings', component: SettingsComponent },
     {path: 'detalle/:id', component: DetailComponent}
    
    ]
  },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
