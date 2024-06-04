import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyTakerComponent } from './survey-taker.component';

describe('SurveyTakerComponent', () => {
  let component: SurveyTakerComponent;
  let fixture: ComponentFixture<SurveyTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyTakerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
