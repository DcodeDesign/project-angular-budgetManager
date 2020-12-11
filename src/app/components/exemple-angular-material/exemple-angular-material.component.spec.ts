import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleAngularMaterialComponent } from './exemple-angular-material.component';

describe('ExempleAngularMaterialComponent', () => {
  let component: ExempleAngularMaterialComponent;
  let fixture: ComponentFixture<ExempleAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleAngularMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
