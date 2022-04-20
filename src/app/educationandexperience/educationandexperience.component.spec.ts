import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationandexperienceComponent } from './educationandexperience.component';

describe('EducationandexperienceComponent', () => {
  let component: EducationandexperienceComponent;
  let fixture: ComponentFixture<EducationandexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationandexperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationandexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
