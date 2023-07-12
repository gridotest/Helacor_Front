import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Reporte } from 'src/app/interfaces/reporte';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog } from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';
import { ReporteService } from 'src/app/components/services/reporte.service';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-visualizar-reporte',
  templateUrl: './visualizar-reporte.component.html',
  styleUrls: ['./visualizar-reporte.component.css']
})
export class VisualizarReporteComponent implements AfterViewInit{

  displayedColumns: string[] = ['empresa_encargada', 'patente_vehiculo', 'cantidad_bultos', 'zona_destino','fecha_salida','fecha_estimada_entrega','fecha_entrega','estado_entrega'];
  dataSource = new MatTableDataSource<Reporte>();
  
  excelData : any;
  procesando: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  ngOninit() : void {


  }

  constructor(private _snackBar: MatSnackBar,private _bottomSheet: MatBottomSheet,private _reporteService : ReporteService,private dialogo: MatDialog) {
    
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if( this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = 'Ítems por página'
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  msjExito(){

    this._snackBar.open('Registro eliminado con exito', '',{ duration:3000,horizontalPosition:'right' });

}
}
