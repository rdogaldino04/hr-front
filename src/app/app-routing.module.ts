import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './module/region/region.component';

const routes: Routes = [
  { path: 'regions', component: RegionComponent },
  { path: '', pathMatch: 'full', redirectTo: 'regions' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }