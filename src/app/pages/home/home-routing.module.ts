import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home.component';
import { DirectiveUsingComponent } from './directive-using/directive-using.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'directive-using',
        component: DirectiveUsingComponent
      },
      {
        path: 'form',
        component: FormComponent,
      }, {
        path: 'table',
        component: TableComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'directive-using' },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
