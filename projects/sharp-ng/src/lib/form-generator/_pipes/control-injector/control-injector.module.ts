import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlInjectorPipe } from './control-injector.pipe';

@NgModule({
  declarations: [ControlInjectorPipe],
  exports: [ControlInjectorPipe],
  imports: [CommonModule],
})
export class ControlInjectorModule {}
