import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'regions',
    loadChildren: () => import('./module/region/region.module').then(m => m.RegionModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./module/location/location.module').then(m => m.LocationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
