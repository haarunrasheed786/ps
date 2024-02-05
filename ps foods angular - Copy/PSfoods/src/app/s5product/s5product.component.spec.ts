import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S5productComponent } from './s5product.component';

describe('S5productComponent', () => {
  let component: S5productComponent;
  let fixture: ComponentFixture<S5productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S5productComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S5productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
