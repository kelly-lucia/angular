import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';
import { HomeComponent } from './home.component';
import { DirectiveUsingComponent } from './pages/directive-using/directive-using.component';
import { ProgrammerComponent } from './pages/programmer/programmer.component';
import { RxjsUsingComponent } from './pages/rxjs-using/rxjs-using.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'directive-using',
        component: DirectiveUsingComponent,
      },
      {
        path: 'rxjs-using',
        component: RxjsUsingComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'programmer',
        component: ProgrammerComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'directive-using' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
