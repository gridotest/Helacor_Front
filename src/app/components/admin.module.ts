import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';


@NgModule({
    declarations: [
      AdminComponent
    ],
    imports: [
         CommonModule,
         AdminRoutingModule,
         FormsModule,
         RouterModule
    ],
    entryComponents: [
      // ConfirmDialogComponent
    ]
})
export class AdminModule { }
