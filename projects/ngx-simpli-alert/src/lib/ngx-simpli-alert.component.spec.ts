import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpliAlertComponent } from './ngx-simpli-alert.component';

describe('NgxSimpliAlertComponent', () => {
  let component: NgxSimpliAlertComponent;
  let fixture: ComponentFixture<NgxSimpliAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSimpliAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSimpliAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
