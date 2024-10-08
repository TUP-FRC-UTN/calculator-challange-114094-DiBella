import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperationComponent } from './add-operation.component';

describe('AddOperationComponent', () => {
  let component: AddOperationComponent;
  let fixture: ComponentFixture<AddOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
