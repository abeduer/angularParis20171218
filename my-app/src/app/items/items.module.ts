import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { ListItemComponent } from './containers/list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent
  ],
  declarations: [
    ItemComponent,
    ListItemComponent
  ]
})
export class ItemsModule { }
