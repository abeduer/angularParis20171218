import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../../core/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('content') content: TemplateRef<any>;

  @Input()
  set showModal(value: boolean) {
    if (value) {
      Promise.resolve().then(() => {
        this._ModalService.open(this.content).then(
          result => {
            this.closeModal.emit(true);
          },
          reason => {
            this.closeModal.emit(true);
          }
        );
      });
    }
  }

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private _ModalService: ModalService) {}

  ngOnInit() {}
}
