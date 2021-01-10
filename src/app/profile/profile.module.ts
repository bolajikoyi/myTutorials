import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObservableTutorialComponent } from './observable-tutorial/observable-tutorial.component';
import { Page404profileComponent } from './page404profile/page404profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ObservableTutorialComponent,
    Page404profileComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, FormsModule],
})
export class ProfileModule {}
