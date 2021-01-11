import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FifthTutorialComponent } from './fifth-tutorial/fifth-tutorial.component';
import { FirstTutorialComponent } from './first-tutorial/first-tutorial.component';
import { FourthTutorialComponent } from './fourth-tutorial/fourth-tutorial.component';
import { SecondTutorialComponent } from './second-tutorial/second-tutorial.component';
import { SeventhTutorialComponent } from './seventh-tutorial/seventh-tutorial.component';
import { SixthTutorialComponent } from './sixth-tutorial/sixth-tutorial.component';
import { ThirdTutorialComponent } from './third-tutorial/third-tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { SmartTable1Component } from './smart-table1/smart-table1.component';
import { SmartTable2Component } from './smart-table2/smart-table2.component';

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
    SmartTable1Component,
    SmartTable2Component,
  ],
  imports: [CommonModule, TutorialRoutingModule, Ng2SmartTableModule],
})
export class TutorialModule {}
