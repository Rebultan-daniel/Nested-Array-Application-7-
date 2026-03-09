import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  kanto = signal([
    { name: 'Bulbasaur', type: 'Grass/Poison', item: 'Mystic Water', desc: 'Seed Pokemon' },
    { name: 'Charmander', type: 'Fire', item: 'Charcoal', desc: 'Lizard Pokemon' },
    { name: 'Squirtle', type: 'Water', item: 'Mystic Water', desc: 'Tiny Turtle Pokemon' },
    { name: 'Pikachu', type: 'Electric', item: 'Light Ball', desc: 'Electric Mouse Pokemon' },
    { name: 'Charizard', type: 'Fire/Flying', item: 'Charcoal', desc: 'Flame Pokemon' },
    { name: 'Blastoise', type: 'Water', item: 'Mystic Water', desc: 'Shellfish Pokemon' },
  ]);

  johto = signal([
    { name: 'Chikorita', type: 'Grass', item: 'Mystic Water', desc: 'Leaf Pokemon' },
    { name: 'Cyndaquil', type: 'Fire', item: 'Charcoal', desc: 'Mouse Pokemon' },
    { name: 'Totodile', type: 'Water', item: 'Mystic Water', desc: 'Big Jaw Pokemon' },
    { name: 'Typhlosion', type: 'Fire', item: 'Charcoal', desc: 'Volcano Pokemon' },
    { name: 'Ampharos', type: 'Electric', item: 'Magnet', desc: 'Light Pokemon' },
    { name: 'Meganium', type: 'Grass', item: 'Mystic Water', desc: 'Herb Pokemon' },
  ]);

  hoenn = signal([
    { name: 'Treecko', type: 'Grass', item: 'Mystic Water', desc: 'Wood Gecko Pokemon' },
    { name: 'Torchic', type: 'Fire', item: 'Charcoal', desc: 'Chick Pokemon' },
    { name: 'Mudkip', type: 'Water', item: 'Mystic Water', desc: 'Mud Fish Pokemon' },
    { name: 'Sceptile', type: 'Grass', item: 'Mystic Water', desc: 'Forest Pokemon' },
    { name: 'Blaziken', type: 'Fire/Fighting', item: 'Focus Band', desc: 'Blaze Pokemon' },
    { name: 'Swampert', type: 'Water/Ground', item: 'Mystic Water', desc: 'Mud Fish Pokemon' },
  ]);

  items = signal([
    { name: 'Potion', price: 300 },
    { name: 'Super Potion', price: 700 },
    { name: 'Hyper Potion', price: 1200 },
    { name: 'Max Potion', price: 2500 },
    { name: 'Revive', price: 1500 },
    { name: 'Max Revive', price: 3000 },
    { name: 'Antidote', price: 100 },
    { name: 'Paralyze Heal', price: 200 },
    { name: 'Burn Heal', price: 250 },
    { name: 'Ice Heal', price: 250 },
    { name: 'Full Heal', price: 600 },
    { name: 'Full Restore', price: 3000 },
    { name: 'Poke Ball', price: 200 },
    { name: 'Great Ball', price: 600 },
    { name: 'Ultra Ball', price: 1200 },
    { name: 'Master Ball', price: 99999 },
    { name: 'Berry', price: 10 },
    { name: 'Rare Candy', price: 3000 },
    { name: 'Elixir', price: 600 },
    { name: 'Max Elixir', price: 3000 }
  ]);

  cart = signal<any[]>([]);

  addToCart(item: any) {
    this.cart.update(c => [...c, item]);
  }

  total = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

}