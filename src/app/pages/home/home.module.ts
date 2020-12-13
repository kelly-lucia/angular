import { NgModule, InjectionToken } from '@angular/core';
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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeComponent } from './home.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpService } from '../../services/http.service';
import { ModifyParentAttrDirective } from './directives/modify-parent-attr.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ProgrammerComponent } from './pages/programmer/programmer.component';
import { FormService } from './services/form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RxjsUsingComponent } from './pages/rxjs-using/rxjs-using.component';

export const HOME_NAME = new InjectionToken<string>('HomeName');
@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    ModifyParentAttrDirective,
    HomeComponent,
    DirectiveUsingComponent,
    UnlessDirective,
    ProgrammerComponent,
    RxjsUsingComponent,
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
  providers: [
    HttpService,
    {
      provide: HOME_NAME,
      useValue: 'suibianxiexie',
    },
  ],
})
export class HomeModule {}
