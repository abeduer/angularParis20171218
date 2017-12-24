import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {
  @Input('page') page: number;
  @Input('collectionSize') collectionSize: number;
  @Input('pageSize') pageSize: number;

  @Output() doPageChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageChange(numPage: number): void {
    this.doPageChange.emit(numPage);
  }

}
