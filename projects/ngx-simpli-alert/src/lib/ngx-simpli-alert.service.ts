import { ApplicationRef, ComponentRef, createComponent, Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxSimpliAlertComponent } from './ngx-simpli-alert.component';

export interface AlertOptions {
  title?: string;
  description?: string;
  type?: 'success' | 'danger' | 'question' | 'warning';
  confirmButtonText?: string;
  cancelButtonText?: string;
  isActive?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NgxSimpliAlertService {
private componentRef?: ComponentRef<NgxSimpliAlertComponent>;

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
  ) {}

  show(options: AlertOptions, onConfirm?: () => void, onCancel?: () => void) {
    if (!this.componentRef) {
      this.componentRef = createComponent(NgxSimpliAlertComponent, {
        environmentInjector: this.appRef.injector,
        elementInjector: this.injector,
      });

      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);

      // Cleanup when destroyed
      this.componentRef.onDestroy(() => {
        this.appRef.detachView(this.componentRef!.hostView);
        this.componentRef = undefined;
      });
    }

    this.componentRef.instance.options = {
      ...options,
      isActive: true
    };

    this.componentRef.instance.confirm.subscribe(() => {
      onConfirm?.();
      this.hide();
    });

    this.componentRef.instance.cancel.subscribe(() => {
      onCancel?.();
      this.hide();
    });
  }

  private hide() {
    if (this.componentRef?.instance) {
      this.componentRef.instance.options.isActive = false;
      setTimeout(() => {
        this.componentRef?.destroy();
      }, 500); // esperar animación
    }
  }
}
