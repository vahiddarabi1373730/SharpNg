import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharpNgComponent } from './sharp-ng.component';

describe('SharpNgComponent', () => {
  let component: SharpNgComponent;
  let fixture: ComponentFixture<SharpNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharpNgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharpNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
