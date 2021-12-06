import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {View2Component} from "./view2/view2.component";
import {View11Component} from "./view11/view11.component";

const routes: Routes = [
  { path: 'app2/one', component: View11Component },
  { path: 'app2/two', component: View2Component },
  { path: 'app2', redirectTo: 'app2/one' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
