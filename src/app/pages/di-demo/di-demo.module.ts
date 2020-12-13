import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiDemoComponent } from './di-demo.component';

@NgModule({
  declarations: [DiDemoComponent],
  imports: [CommonModule],
  providers: [
    {
      provide: 'URL',
      useValue: '随便写写',
    },
  ],
})
export class DiDemoModule {}
