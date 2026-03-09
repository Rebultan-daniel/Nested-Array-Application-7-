import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrainerService {
  
  private registry = signal([
    { 
      name: 'Ash Ketchum', 
      team: ['Pikachu', 'Charizard'], 
      items: ['Light Ball', 'Charizardite Y'] 
    },
    { 
      name: 'Misty', 
      team: ['Starmie', 'Psyduck', 'Gyarados'], 
      items: ['Mystic Water', 'None', 'Gyaradosite'] 
    },
    { 
      name: 'Brock', 
      team: ['Onix', 'Geodude', 'Vulpix'], 
      items: ['Hard Stone', 'Golden Rock', 'Fire Stone'] 
    },
    { 
      name: 'Gary Oak', 
      team: ['Blastoise', 'Squirtle', 'Eevee'], 
      items: ['Blastoisinite', 'None', 'Vaporeon'] 
    },
    { 
      name: 'Cynthia', 
      team: ['Garchomp', 'Lucario', 'Milotic'], 
      items: ['Garchompite', 'Lucarionite', 'Leftovers'] 
    }
  ]);

  trainers = this.registry.asReadonly();
}