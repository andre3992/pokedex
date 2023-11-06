import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { of, throwError } from 'rxjs';
import { PokemonInfoComponent } from './pokemon-info.component';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import Pokemon, { Type } from 'src/app/interfaces/pokemon.interface';
import { MatDialogRef } from '@angular/material/dialog';

describe('PokemonInfoComponent', () => {
  let component: PokemonInfoComponent;
  let fixture: ComponentFixture<PokemonInfoComponent>;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let mockSpinnerService: jasmine.SpyObj<NgxSpinnerService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    mockSpinnerService = jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [PokemonInfoComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [
        { provide: HttpClient, useValue: mockHttpClient },
        { provide: NgxSpinnerService, useValue: mockSpinnerService },
        { provide: MatDialog, useValue: mockMatDialog },
      ],
    });

    fixture = TestBed.createComponent(PokemonInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rearrangedId', () => {
    const rearrangedId = component.rearrangeId(25);
    expect(rearrangedId).toBe("0025");
  });

  it('should handle errors and hide spinner on failed API request', () => {
    const mockPokemon = { url: 'https://pokeapi.co/api/v2/pokemon/1' };
    const mockError = 'API request failed';

    mockHttpClient.get.and.returnValue(throwError(mockError));
    component.pokemon = mockPokemon;

    component.getPokemonById();

    expect(mockSpinnerService.show).toHaveBeenCalled();
    expect(mockHttpClient.get).toHaveBeenCalledWith(mockPokemon.url);

    fixture.detectChanges();
    expect(component.pokemonDetails).toBeUndefined();
    expect(mockSpinnerService.hide).toHaveBeenCalled();
  });
});
