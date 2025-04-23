import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { animalCard } from './../animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [NgClass]
})
export class CardComponent implements OnInit{
  route =inject(ActivatedRoute)
  

 
@Input() item? : animalCard;
@Input() isDetailsScreen: boolean = false;
 
constructor(){};

ngOnInit(): void {
  
}

}

