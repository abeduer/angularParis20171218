import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {
  page = 4;
  collectionSize = 70;

  constructor() { }

  ngOnInit() {
  }

}
