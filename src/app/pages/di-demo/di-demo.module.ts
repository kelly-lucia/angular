import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiDemoComponent } from './di-demo.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [DiDemoComponent, TestComponent],
  imports: [CommonModule],
  
})
export class DiDemoModule {}
