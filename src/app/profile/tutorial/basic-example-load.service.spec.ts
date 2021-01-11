import { TestBed } from '@angular/core/testing';

import { BasicExampleLoadService } from './basic-example-load.service';

describe('BasicExampleLoadService', () => {
  let service: BasicExampleLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicExampleLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
