import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3productComponent } from './s3product.component';

describe('S3productComponent', () => {
  let component: S3productComponent;
  let fixture: ComponentFixture<S3productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S3productComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S3productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
