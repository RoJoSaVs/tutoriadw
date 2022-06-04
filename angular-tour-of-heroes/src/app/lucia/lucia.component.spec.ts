import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuciaComponent } from './lucia.component';

describe('LuciaComponent', () => {
  let component: LuciaComponent;
  let fixture: ComponentFixture<LuciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
