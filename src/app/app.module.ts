import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PetProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
