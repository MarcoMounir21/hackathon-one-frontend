import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-create-pet-form',
  templateUrl: './create-pet-form.component.html',
  styleUrls: ['./create-pet-form.component.css']
})
export class CreatePetFormComponent implements OnInit {

  petForm: FormGroup;
  petTypes = [
    {name: 'Cat', value:0},
    {name: 'Dog', value:1},
  ] ;
  hideAddPictureButton = false;
  @ViewChild('pictureWrapper') pictureWrapper: ElementRef

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      birthday: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      type: new FormControl(null),
      breed: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      picture: new FormControl(null, Validators.required),

    })
  }

  onSubmit() {
    this.petService.addPet(this.petForm.value).subscribe();
  }

  uploadFile(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (!file.type.startsWith('image')) {
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.petForm.patchValue({
            'picture': reader.result
          });
          this.displayPreview(reader.result as string);
        };
      }
    }
  }

  private displayPreview(imageUrl: string) {
    this.hideAddPictureButton = true;
    this.pictureWrapper.nativeElement.style.backgroundImage = `url(${imageUrl})`;
  }
}
