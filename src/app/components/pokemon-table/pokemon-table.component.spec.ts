import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTableComponent } from './pokemon-table.component';
import { PokemonInfoComponent } from '../pokemon-info/pokemon-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule

describe('PokemonTableComponent', () => {
  let component: PokemonTableComponent;
  let fixture: ComponentFixture<PokemonTableComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [PokemonTableComponent, PokemonInfoComponent],
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(PokemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
