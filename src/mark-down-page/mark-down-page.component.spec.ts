import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDownPageComponent } from './mark-down-page.component';

describe('MarkDownPageComponent', () => {
  let component: MarkDownPageComponent;
  let fixture: ComponentFixture<MarkDownPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkDownPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkDownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
