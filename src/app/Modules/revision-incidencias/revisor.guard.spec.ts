import { TestBed } from '@angular/core/testing';

import { RevisorGuard } from './revisor.guard';

describe('RevisorGuard', () => {
  let guard: RevisorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RevisorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
