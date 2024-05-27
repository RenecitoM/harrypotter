import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../core/services/harrypotter.service';
import {libros } from '../../interfaces/harry_potter';

@Component({
  selector: 'app-page-libros',
  standalone: true,
  imports: [],
  templateUrl: './page-libros.component.html',
  styleUrl: './page-libros.component.scss'
})
export class PageLibrosComponent implements OnInit {
   LibrosList: libros[]=[];
  constructor(private service: HarrypotterService){}
  ngOnInit(): void {
      this.getLibros()
  }
getLibros(){
  this.service.getInfoList().subscribe({
    next: (result)=>{
     this.LibrosList = result.libros;
    },
    error:(err)=>{
      console.log(err);
 
    }
   })


}
}
