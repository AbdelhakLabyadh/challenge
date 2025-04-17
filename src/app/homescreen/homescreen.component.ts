import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PetService } from '../pets/pet.service';
import { animalCard } from '../animal';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-homescreen',
  imports: [CardComponent, NgFor,CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './homescreen.component.html',
})

export class HomescreenComponent implements OnInit {
  cards :animalCard[]=[]
  constructor( private petService:PetService){
  } 

  getAllAnimals(): void{
    this.petService.getAllPets().subscribe((pets:any) => {
      this.cards = pets.items
    return this.cards
    });
  }

 ngOnInit(): void {
  this.getAllAnimals()
    } 
reloadData(){
   this.getAllAnimals()
}
}
 
