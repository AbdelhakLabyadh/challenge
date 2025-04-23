import { animalCard } from './../animal';
import { Component, inject, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { PetService } from '../pets/pet.service';

@Component({
  selector: 'app-detailsscreen',
  imports: [CardComponent],
  templateUrl: './detailsscreen.component.html',
})

export class DetailsscreenComponent {
  private route:ActivatedRoute = inject(ActivatedRoute)
  private petService = inject(PetService)
  petIdSignal = signal<number>(Number(this.route.snapshot.params['id'])) 
  petSignal = signal<animalCard>({id:'', name:'', type:'', avatar:''})

  constructor(){
    this.petService.getPetByID(this.petIdSignal()).subscribe((pet:animalCard|undefined)=>{
      this.petSignal.set(pet ?? {id:'', name:'', type:'', avatar:''}) 
    })
  } 
}