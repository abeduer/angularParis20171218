import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../collection';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public collection: Item[];

  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

}
