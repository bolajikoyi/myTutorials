import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthTutorialComponent } from './fifth-tutorial/fifth-tutorial.component';
import { FirstTutorialComponent } from './first-tutorial/first-tutorial.component';
import { FourthTutorialComponent } from './fourth-tutorial/fourth-tutorial.component';
import { SecondTutorialComponent } from './second-tutorial/second-tutorial.component';
import { SeventhTutorialComponent } from './seventh-tutorial/seventh-tutorial.component';
import { SixthTutorialComponent } from './sixth-tutorial/sixth-tutorial.component';
import { ThirdTutorialComponent } from './third-tutorial/third-tutorial.component';
import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent,
    children: [
      { path: 'first', component: FirstTutorialComponent },
      { path: 'second', component: SecondTutorialComponent },
      { path: 'third', component: ThirdTutorialComponent },
      { path: 'fourth', component: FourthTutorialComponent },
      { path: 'fifth', component: FifthTutorialComponent },
      { path: 'sixth', component: SixthTutorialComponent },
      { path: 'seventh', component: SeventhTutorialComponent },
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      { path: '**', component: FirstTutorialComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialRoutingModule {}
