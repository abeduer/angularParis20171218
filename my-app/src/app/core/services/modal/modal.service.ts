import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {
  closeResult: string;

  constructor(private _NgbModal: NgbModal) {}

  open(content) {
    return this._NgbModal.open(content).result;
  }
}
