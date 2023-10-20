import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdFormComponent } from './prod-form/prod-form.component';


const routes: Routes = [
  {path:'prod/add',component:ProdFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
