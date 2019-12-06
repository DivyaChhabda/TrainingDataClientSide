import { TestBed } from '@angular/core/testing';

import { InsertTrainingDataService } from './insert-training-data.service';

describe('InsertTrainingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertTrainingDataService = TestBed.get(InsertTrainingDataService);
    expect(service).toBeTruthy();
  });
});
