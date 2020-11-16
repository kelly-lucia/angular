import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';
import { DirectiveUsingComponent } from './pages/directive-using/directive-using.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeComponent } from './home.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpService } from '../../services/http.service';
import { ModifyParentAttrDirective } from './directives/modify-parent-attr.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    ModifyParentAttrDirective,
    HomeComponent,
    DirectiveUsingComponent,
    UnlessDirective,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzRadioModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [HttpService],
})
export class HomeModule {}
