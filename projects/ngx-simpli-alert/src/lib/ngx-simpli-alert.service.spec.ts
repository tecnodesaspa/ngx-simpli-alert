import { TestBed } from '@angular/core/testing';

import { NgxSimpliAlertService } from './ngx-simpli-alert.service';

describe('NgxSimpliAlertService', () => {
  let service: NgxSimpliAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpliAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
