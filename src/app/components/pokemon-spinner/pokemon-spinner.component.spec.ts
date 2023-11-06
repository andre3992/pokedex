import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSpinnerModule } from 'ngx-spinner'; // Import NgxSpinnerModule
import { PokemonSpinnerComponent } from './pokemon-spinner.component';

describe('PokemonSpinnerComponent', () => {
  let component: PokemonSpinnerComponent;
  let fixture: ComponentFixture<PokemonSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonSpinnerComponent],
      imports: [NgxSpinnerModule], // Import NgxSpinnerModule
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});