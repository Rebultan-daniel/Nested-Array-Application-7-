import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  templateUrl: './pokemon-card.component.html'
})
export class PokemonCardComponent {

  pokemon = input<any>();

}