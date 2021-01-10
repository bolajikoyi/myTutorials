import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhTutorialComponent } from './seventh-tutorial.component';

describe('SeventhTutorialComponent', () => {
  let component: SeventhTutorialComponent;
  let fixture: ComponentFixture<SeventhTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
