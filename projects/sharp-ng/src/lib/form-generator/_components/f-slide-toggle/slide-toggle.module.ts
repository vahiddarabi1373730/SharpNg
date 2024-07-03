import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from './slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SlideToggleComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [SlideToggleComponent],
})
export class SlideToggleModule {}
