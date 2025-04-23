import { Component, signal, inject, computed } from '@angular/core';
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

export class HomescreenComponent {
  private allPetsSignal = signal<animalCard[]>([])
  private petService=inject(PetService)

  cards = computed(()=> this.allPetsSignal())

  constructor() {
    this.getAllAnimals()
  } 

  getAllAnimals(): void{
    this.petService.getAllPets().subscribe((pets:any) => {
      this.allPetsSignal.set(pets.items ?? [])
    });
  }


reloadData(){
   this.getAllAnimals()
}
}
 
