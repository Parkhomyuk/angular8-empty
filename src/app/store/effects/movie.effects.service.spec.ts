import { TestBed } from '@angular/core/testing';

import { Movie.EffectsService } from './movie.effects.service';

describe('Movie.EffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Movie.EffectsService = TestBed.get(Movie.EffectsService);
    expect(service).toBeTruthy();
  });
});
