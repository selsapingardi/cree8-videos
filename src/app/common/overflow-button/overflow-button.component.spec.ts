import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowButtonComponent } from './overflow-button.component';

describe('OverflowButtonComponent', () => {
  let component: OverflowButtonComponent;
  let fixture: ComponentFixture<OverflowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverflowButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverflowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
