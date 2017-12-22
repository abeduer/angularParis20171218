import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemComponent } from './components/item/item.component';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditItemComponent } from './containers/edit-item/edit-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, ItemsRoutingModule],
  exports: [],
  declarations: [
    ItemComponent,
    ListItemComponent,
    AddItemComponent,
    EditItemComponent
  ]
})
export class ItemsModule {}
