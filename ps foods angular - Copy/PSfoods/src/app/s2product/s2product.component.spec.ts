import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2productComponent } from './s2product.component';

describe('S2productComponent', () => {
  let component: S2productComponent;
  let fixture: ComponentFixture<S2productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S2productComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S2productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
