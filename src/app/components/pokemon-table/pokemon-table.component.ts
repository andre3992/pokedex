import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { PokemonTableService } from '../../services/pokemon-table.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Pokemon from 'src/app/interfaces/pokemon.interface';
import { PokemonList, PokemonListItem } from 'src/app/interfaces/pokemon-list.interface';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {
  pokemonList: PokemonListItem[] = [];
  threshold: number = 15;
  page: number = 0;
  showErrorMessage: boolean = false;
  private window!: Window;

  constructor(public el: ElementRef, public pokemonTableService: PokemonTableService, public spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.window = window;
  }

  @HostListener('window:scroll', ['$event'])
  windowScrollEvent() {
    const heightOfWholePage = this.window.document.documentElement.scrollHeight;
    const heightOfElement = this.el.nativeElement.scrollHeight;
    const currentScrolledY = this.window.scrollY;
    const innerHeight = this.window.innerHeight;

    // Check the height of element and page
    const spaceOfElementAndPage = heightOfWholePage - heightOfElement;

    // Check if we are near the bottom
    const scrollToBottom =
      heightOfElement - innerHeight - currentScrolledY + spaceOfElementAndPage;

    // If the user is near the end
    if (scrollToBottom < this.threshold) {
      this.page += 20;
      this.getPokemons();
    }
  }

  getPokemons() {
    this.spinner.show();
    this.pokemonTableService.getPokemons(this.page).subscribe({
      next: (res) => {
        this.pokemonList.push(...res.results);
        this.spinner.hide();
      },
      error: (e) => {
        console.error(e);
        this.showErrorMessage = true;
        this.spinner.hide();
      },
    });
  }
}