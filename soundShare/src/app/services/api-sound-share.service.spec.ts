import { TestBed } from '@angular/core/testing';

import { ApiSoundShareService } from './api-sound-share.service';

describe('ApiSoundShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSoundShareService = TestBed.get(ApiSoundShareService);
    expect(service).toBeTruthy();
  });
});
