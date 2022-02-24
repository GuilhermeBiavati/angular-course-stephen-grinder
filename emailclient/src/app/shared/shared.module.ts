import { TimesDirective } from './times.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceholderEmailComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    InputComponent,
    PlaceholderEmailComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    PlaceholderEmailComponent
  ]

})
export class SharedModule { }
