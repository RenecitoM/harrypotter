import { Routes } from '@angular/router';
import { authCanMatchGuard } from './guards/auth-can-match.guard';
import { LoginComponent } from './home/login/login.component';

export const routes: Routes = [
    {path:"on", loadChildren:()=> import("./components/home.routes"), canMatch:[authCanMatchGuard]},
    
    {path:"**", component: LoginComponent}
];
