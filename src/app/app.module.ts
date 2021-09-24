import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { CreatePetFormComponent } from './components/create-pet-form/create-pet-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ApplicationHeaderComponent } from './components/application-header/application-header.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { AppRoutingModule } from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PetProfileComponent,
    CreatePetFormComponent,
    ApplicationHeaderComponent,
    PetsListComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
      HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
