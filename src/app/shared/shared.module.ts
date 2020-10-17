import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, ErrorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [HeaderComponent, ErrorComponent]
})
export class SharedModule { }
