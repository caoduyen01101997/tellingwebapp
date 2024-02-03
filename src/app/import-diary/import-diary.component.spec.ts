import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDiaryComponent } from './import-diary.component';

describe('ImportDiaryComponent', () => {
  let component: ImportDiaryComponent;
  let fixture: ComponentFixture<ImportDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportDiaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
