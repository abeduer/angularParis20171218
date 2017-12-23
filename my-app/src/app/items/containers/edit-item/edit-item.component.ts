import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/interfaces/item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  item$: Observable<Item>;

  constructor(
    private _CollectionService: CollectionService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.item$ = this._ActivatedRoute.paramMap
      .map((params: ParamMap) => params.get('itemId'))
      .switchMap(id => this._CollectionService.getItem(id));
  }

  editItem(item: Item): void {
    this._CollectionService.updateItem(item);
    this._Router.navigate(['/items'])
      .catch(error => console.log(error));
  }

  deleteItem(item: Item): void {
    this._CollectionService.deleteItem(item);
    this._Router.navigate(['/items'])
      .catch(error => console.log(error));
  }
}
