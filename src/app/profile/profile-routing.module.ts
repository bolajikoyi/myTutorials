import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableTutorialComponent } from './observable-tutorial/observable-tutorial.component';
import { Page404profileComponent } from './page404profile/page404profile.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'observable', component: ObservableTutorialComponent },
      {
        path: 'tutorial',
        loadChildren: () =>
          import('./tutorial/tutorial.module').then((m) => m.TutorialModule),
      },
      { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
      { path: '**', component: Page404profileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
