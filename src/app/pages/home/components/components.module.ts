import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiChoiceComponent } from './multi-choice.component';
import { KyCheckboxComponent } from './ky-checkbox.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const allCmp = [MultiChoiceComponent, KyCheckboxComponent];

@NgModule({
  declarations: [...allCmp],
  exports: [...allCmp],
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
})
export class ComponentsModule {}
