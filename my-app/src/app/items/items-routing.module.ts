import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditItemComponent } from './containers/edit-item/edit-item.component';

const routes: Routes = [
  { path: '', component: ListItemComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'edit/:itemId', component: EditItemComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: []
})
export class ItemsRoutingModule {}
