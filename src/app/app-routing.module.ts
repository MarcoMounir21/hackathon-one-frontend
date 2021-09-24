import { NgModule } from '@angular/core';
import { CreatePetFormComponent } from "./components/create-pet-form/create-pet-form.component";
import { RouterModule, Routes } from "@angular/router";
import { PetsListComponent } from "./components/pets-list/pets-list.component";

const routes: Routes = [
  { path: '', component: PetsListComponent },
  { path: 'add', component: CreatePetFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
