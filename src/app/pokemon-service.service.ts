import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  kanto = signal([
    { name: 'Pikachu', type: 'Electric', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Charizard', type: 'Fire/Flying', item: 'Charcoal', desc: 'Flame Pokemon' }
  ]);

  johto = signal([
    { name: 'Typhlosion', type: 'Fire', item: 'Charcoal', desc: 'Volcano Pokemon' },
    { name: 'Ampharos', type: 'Electric', item: 'Magnet', desc: 'Light Pokemon' }
  ]);

  hoenn = signal([
    { name: 'Blaziken', type: 'Fire/Fighting', item: 'Focus Band', desc: 'Blaze Pokemon' },
    { name: 'Gardevoir', type: 'Psychic/Fairy', item: 'Twisted Spoon', desc: 'Embrace Pokemon' }
  ]);

  items = signal([
    { name: 'Potion', price: 300 },
    { name: 'Super Potion', price: 700 },
    { name: 'Hyper Potion', price: 1200 },
    { name: 'Revive', price: 1500 },
    { name: 'Antidote', price: 100 },
    { name: 'Paralyze Heal', price: 200 },
    { name: 'Burn Heal', price: 250 },
    { name: 'Ice Heal', price: 250 },
    { name: 'Full Heal', price: 600 },
    { name: 'Poke Ball', price: 200 }
  ]);

  cart = signal<any[]>([]);

  addToCart(item:any){
    this.cart.update(c => [...c, item]);
  }

  total = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

}