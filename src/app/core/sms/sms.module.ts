import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SmsComponent],
  imports: [
    CommonModule,
    SmsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule
  ]
})
export class SmsModule { }
