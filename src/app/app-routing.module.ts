import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sms',
    pathMatch: 'full'
  },
  {
    path: 'sms',
    loadChildren: () => import('./core/sms/sms.module').then((m) => m.SmsModule).catch((e) => console.log(e)),
    data: { title: `SMS Bomber | NukeIt` }
  },
  {
    path: 'call',
    loadChildren: () => import('./core/call/call.module').then((m) => m.CallModule).catch((e) => console.log(e)),
    data: { title: `Call Bomber | NukeIt` }
  },
  {
    path: 'schedule',
    loadChildren: () => import('./core/schedule/schedule.module').then((m) => m.ScheduleModule).catch((e) => console.log(e)),
    data: { title: `Schedule Bomber | NukeIt` }
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: 'error'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
