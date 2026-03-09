import { Component, inject } from '@angular/core';
import { TrainerService } from '../trainer-service.service';

@Component({
  selector: 'app-trainer-display',
  standalone: true,
  template: `
    <div class="container">
      <h1> Pokémon League Registry</h1>
      @for (trainer of trainerService.trainers(); track trainer.name) {
        <div class="trainer-card">
          <h2>Trainer: {{ trainer.name }}</h2>
          <ul>
            @for (pokemon of trainer.team; track $index) {
              <li>
                <strong>{{ pokemon }}</strong> — 
                <small>Held Item: {{ trainer.items[$index] }}</small>
              </li>
            }
          </ul>
        </div>
      }
    </div>
  `
})
export class TrainerDisplayComponent {
  trainerService = inject(TrainerService);
}