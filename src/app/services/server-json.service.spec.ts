import { TestBed } from '@angular/core/testing';

import { ServerJsonService } from './server-json.service';

describe('ServerJsonService', () => {
  let service: ServerJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
