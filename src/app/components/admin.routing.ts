import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { VisualizarReporteComponent } from './visualizar-reporte/visualizar-reporte.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'reporte', pathMatch: 'full' },
      { path: 'home', component: AdminComponent, pathMatch: 'full', },
      { path: 'reporte', component: VisualizarReporteComponent },
     
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
