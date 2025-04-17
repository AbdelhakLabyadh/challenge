import { animalCard } from './../animal';
import { Component , inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { PetService } from '../pets/pet.service';

@Component({
  selector: 'app-detailsscreen',
  imports: [CardComponent],
  templateUrl: './detailsscreen.component.html',
})

export class DetailsscreenComponent implements OnInit {
  route:ActivatedRoute =inject(ActivatedRoute)
  animalId:number = 0 
  animal:animalCard = {id:"", name:"",avatar:"",type:""}

  constructor(private petService:PetService){
    this.animalId=Number(this.route.snapshot.params['id'])
  }

  ngOnInit(): void {
      this.petService.getPetByID(this.animalId).subscribe((pet:animalCard|undefined)=>{
        return this.animal = pet !== undefined ? pet : {id:"", name:"",avatar:"",type:""}
      })
  }
} 

