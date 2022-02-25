import { TimesDirective } from './times.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceholderEmailComponent } from './placeholder/placeholder.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    InputComponent,
    PlaceholderEmailComponent,
    TimesDirective,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    PlaceholderEmailComponent,
    ModalComponent
  ]

})
export class SharedModule { }
