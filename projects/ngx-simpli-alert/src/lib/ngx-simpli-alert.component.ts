import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertOptions } from './ngx-simpli-alert.service';

@Component({
    selector: 'ngx-simpli-alert',
    templateUrl: './ngx-simpli-alert.component.html',
    styleUrls: ['./ngx-simpli-alert.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class NgxSimpliAlertComponent{
 @Input() options: AlertOptions = {
    title: '',
    description: '',
    type: 'success',
    confirmButtonText: '',
    cancelButtonText: '',
    isActive: false,
  };

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  confirmAlert() {
    this.confirm.emit();
  }

  cancelAlert() {
    this.cancel.emit();
  }
}
