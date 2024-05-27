import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup =new FormGroup({email:new FormControl("")
 

  })  
 clickLogin():void{
  //console.log(this.formGroup.get("email")?.value);
  //const email = this.formGroup.get("email")?.value as string;
  const email= this.formGroup.controls.email.value;
  console.log(email);

 } 

}
