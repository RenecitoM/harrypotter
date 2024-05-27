import { Component, OnInit } from '@angular/core';
import { Info } from '../../interfaces/harry_potter';
import { HarrypotterService } from '../../core/services/harrypotter.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-page-info',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './page-info.component.html',
  styleUrl: './page-info.component.scss'
})
export class PageInfoComponent implements OnInit {
infoList: Info []=[] 

constructor( private services: HarrypotterService){}
  ngOnInit(): void {
    this.getInfo()
}
getInfo(){
  this.services.getInfoList().subscribe({
   next: (result)=>{
    this.infoList = result.info;
   },
   error:(err)=>{
    console.log(err);

   }
  })
}

}

