import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualizarReporteComponent } from './components/visualizar-reporte/visualizar-reporte.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path : 'reporte', component: VisualizarReporteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
