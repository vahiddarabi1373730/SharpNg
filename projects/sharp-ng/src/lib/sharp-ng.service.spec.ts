import { TestBed } from '@angular/core/testing';

import { SharpNgService } from './sharp-ng.service';

describe('SharpNgService', () => {
  let service: SharpNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharpNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
