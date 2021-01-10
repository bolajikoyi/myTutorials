import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTutorialComponent } from './fourth-tutorial.component';

describe('FourthTutorialComponent', () => {
  let component: FourthTutorialComponent;
  let fixture: ComponentFixture<FourthTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
