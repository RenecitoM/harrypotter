import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageHechizosComponent } from '../page-hechizos/page-hechizos.component';
import { PageLibrosComponent } from '../page-libros/page-libros.component';
import { PageInfoComponent } from '../page-info/page-info.component';
import { PagePersonajesComponent } from '../page-personajes/page-personajes.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, PageHechizosComponent,PageLibrosComponent,PageInfoComponent,PagePersonajesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentView: string = 'hechizos';

  setView(view: string) {
    this.currentView = view;
  }
}
