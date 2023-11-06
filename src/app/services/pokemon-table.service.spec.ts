import { TestBed } from '@angular/core/testing';
import { PokemonTableService } from './pokemon-table.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonTableService', () => {
  let service: PokemonTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(PokemonTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});