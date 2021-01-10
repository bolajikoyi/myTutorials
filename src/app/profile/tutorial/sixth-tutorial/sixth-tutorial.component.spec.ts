import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthTutorialComponent } from './sixth-tutorial.component';

describe('SixthTutorialComponent', () => {
  let component: SixthTutorialComponent;
  let fixture: ComponentFixture<SixthTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
