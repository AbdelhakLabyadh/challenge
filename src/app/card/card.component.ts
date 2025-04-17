import { Component, Input } from '@angular/core';
import { animalCard } from '../animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: []
})
export class CardComponent  {

@Input() 
item? : animalCard;
 
constructor() {};

}

