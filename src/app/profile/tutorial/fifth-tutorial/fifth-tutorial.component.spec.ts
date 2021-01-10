import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthTutorialComponent } from './fifth-tutorial.component';

describe('FifthTutorialComponent', () => {
  let component: FifthTutorialComponent;
  let fixture: ComponentFixture<FifthTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
