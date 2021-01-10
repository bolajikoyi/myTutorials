import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
//import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'profile',
    loadChildren: () =>
      import(`./profile/profile.module`).then((m) => m.ProfileModule),
  },
  { path: 'attendance', component: AttendanceComponent },
  {
    path: 'leaves',
    loadChildren: () =>
      import(`./leaves/leaves.module`).then((m) => m.LeavesModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
