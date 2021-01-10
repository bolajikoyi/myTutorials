import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FifthTutorialComponent } from './fifth-tutorial/fifth-tutorial.component';
import { FirstTutorialComponent } from './first-tutorial/first-tutorial.component';
import { FourthTutorialComponent } from './fourth-tutorial/fourth-tutorial.component';
import { SecondTutorialComponent } from './second-tutorial/second-tutorial.component';
import { SeventhTutorialComponent } from './seventh-tutorial/seventh-tutorial.component';
import { SixthTutorialComponent } from './sixth-tutorial/sixth-tutorial.component';
import { ThirdTutorialComponent } from './third-tutorial/third-tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

@NgModule({
  declarations: [
    TutorialComponent,
    FirstTutorialComponent,
    SecondTutorialComponent,
    ThirdTutorialComponent,
    FourthTutorialComponent,
    FifthTutorialComponent,
    SixthTutorialComponent,
    SeventhTutorialComponent,
  ],
  imports: [CommonModule, TutorialRoutingModule],
})
export class TutorialModule {}
