import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../core/services/harrypotter.service';
import { Observable } from 'rxjs';
import { Hechizos } from '../../interfaces/harry_potter';
import { AsyncPipe } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommentLikeComponent } from '../comment-like/comment-like.component';

@Component({
  selector: 'app-page-hechizos',
  standalone: true,
  imports: [AsyncPipe, NavbarComponent, CommentLikeComponent],
  templateUrl: './page-hechizos.component.html',
  styleUrl: './page-hechizos.component.scss'
})
export class PageHechizosComponent implements OnInit {

  //public hechizos$!: Observable<Hechizos>;
  hechizoList:  Hechizos[]=[];

  constructor(private services: HarrypotterService){}

  ngOnInit(): void {
    // this.hechizos$=this.services.getHechizosList()
   this.getHechizos()
      
  }
  getHechizos(){
     this.services.getInfoList().subscribe({
      next: (result)=>{
       this.hechizoList = result.hechizos;
      },
      error:(err)=>{
  console.log(err);
      }
     })
  }
 

}
