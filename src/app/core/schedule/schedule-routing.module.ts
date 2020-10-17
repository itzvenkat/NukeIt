import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
