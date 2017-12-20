import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

const routes: Routes = [
  { path: 'list', component: ListItemComponent },
  { path: 'add', component: AddItemComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: []
})
export class ItemsRoutingModule {}
