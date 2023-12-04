import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  public usernameFormControl = new FormControl(null, [Validators.required, Validators.email]);
  public passwordFormControl = new FormControl(null, [Validators.minLength(4)]);

  public userForm!: FormGroup;
  constructor(){}

  ngOnInit(): void{
    this.userForm = new FormGroup({
          username: this.usernameFormControl,
          password: this.passwordFormControl,
    });

    
  }
  submit(){
    console.log(this.userForm.value);
  }
}
