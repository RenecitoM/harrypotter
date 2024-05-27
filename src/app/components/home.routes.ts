import { Routes } from "@angular/router";
import { PageHechizosComponent } from "./page-hechizos/page-hechizos.component";
import { PageInfoComponent } from "./page-info/page-info.component";
import { PagePersonajesComponent } from "./page-personajes/page-personajes.component";
import { PageLibrosComponent } from "./page-libros/page-libros.component";


export const routes: Routes=[
{path: 'hechizos', component: PageHechizosComponent},
{path: 'info', component: PageInfoComponent},
{path: 'personajes', component: PagePersonajesComponent},
{path: 'libros', component: PageLibrosComponent},
    

]
export default routes;