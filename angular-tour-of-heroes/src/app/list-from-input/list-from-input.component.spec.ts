import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFromInputComponent } from './list-from-input.component';

describe('ListFromInputComponent', () => {
  let component: ListFromInputComponent;
  let fixture: ComponentFixture<ListFromInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFromInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFromInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
