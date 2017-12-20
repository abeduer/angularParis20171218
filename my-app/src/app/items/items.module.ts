import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemComponent } from './components/item/item.component';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

@NgModule({
  imports: [CommonModule, SharedModule, ItemsRoutingModule],
  exports: [ListItemComponent, AddItemComponent],
  declarations: [ItemComponent, ListItemComponent, AddItemComponent]
})
export class ItemsModule {}
