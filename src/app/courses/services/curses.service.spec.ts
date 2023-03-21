import { TestBed } from '@angular/core/testing';

import { CursesService } from './courses.service';

describe('CursesService', () => {
  let service: CursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
