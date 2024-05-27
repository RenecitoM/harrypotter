import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../core/services/harrypotter.service';
import { Personajes } from '../../interfaces/harry_potter';
@Component({
  selector: 'app-page-personajes',
  standalone: true,
  imports: [],
  templateUrl: './page-personajes.component.html',
  styleUrl: './page-personajes.component.scss'
})
export class PagePersonajesComponent implements OnInit {

  personajeList: Personajes []=[]
  constructor(private services:HarrypotterService){}
  ngOnInit(): void {
      this.getPersonajes()
  }

  getPersonajes(){
  
  this.services.getInfoList().subscribe({
    next: (result)=>{
      this.personajeList = result.personajes;
     },
     error:(err)=>{
      console.log(err);
  
     }
    })
  

  }

}
