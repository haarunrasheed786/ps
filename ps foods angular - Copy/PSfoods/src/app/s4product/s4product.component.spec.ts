import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S4productComponent } from './s4product.component';

describe('S4productComponent', () => {
  let component: S4productComponent;
  let fixture: ComponentFixture<S4productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S4productComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S4productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
