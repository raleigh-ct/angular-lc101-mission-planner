import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentComponent } from './equipment.component';

describe('EquipmentComponent', () => {
  let component: EqiupmentComponent;
  let fixture: ComponentFixture<EqiupmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
