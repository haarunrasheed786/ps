import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S6productComponent } from './s6product.component';

describe('S6productComponent', () => {
  let component: S6productComponent;
  let fixture: ComponentFixture<S6productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S6productComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S6productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
