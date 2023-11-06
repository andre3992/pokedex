import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { rearrangeId } from 'src/app/helpers/utils';
import Pokemon from '../../interfaces/pokemon.interface';
import { PokemonListItem } from 'src/app/interfaces/pokemon-list.interface';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  @Input() pokemon: PokemonListItem | undefined = undefined;
  pokemonDetails: Pokemon | undefined;

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPokemonById();
  }

  getPokemonById() {
    if (this.pokemon) {
      this.spinner.show();
      this.http.get<Pokemon>(this.pokemon.url).subscribe({
        next: (res) => {
          this.pokemonDetails = res;
          this.spinner.hide();
        },
        error: (e) => {
          console.error(e);
          this.spinner.hide();
        },
      });
    }
  }

  openDialog(details: Pokemon) {
    this.dialog.open(ModalComponent, {
      data: details,
      backdropClass: 'backdropBackground'
    });
  }

  rearrangeId(id: number) {
    return rearrangeId(id);
  }
}
