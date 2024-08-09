import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
    {path: 'home', 
    component: MainpageComponent,
    // canActivate: [AuthGuard],
     children:[ 
     { path: '',redirectTo: 'dashboard', pathMatch: 'full'},
     { path: 'dashboard', component: DashboardComponent },
     {path: 'detalle/:id', component: DetailComponent}
    
    ]
  },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
