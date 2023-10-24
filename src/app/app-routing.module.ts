import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPopularComponent } from './list-popular/list-popular.component';
import { ListSportsComponent } from './list-sports/list-sports.component';

const routes: Routes = [
  { path: "list-popular", component : ListPopularComponent },
  { path: "list-sports", component : ListSportsComponent },
  { path: "", redirectTo: "/list-popular", pathMatch : "full" },
  { path: "list-sports", redirectTo: "/list-sports", pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
