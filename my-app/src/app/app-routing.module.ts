import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'items', loadChildren: './items/items.module#ItemsModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules,
        // enableTracing: true // <-- debugging purposes only
      }
    )
  ]
})
export class AppRoutingModule {}
