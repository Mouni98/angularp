import { Component, OnInit } from '@angular/core';
import{ User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nation=['India','United kingdom','United States'];
  nationHasError=true;
  userModel=new User('','','',7997456987 ,'','','default');
  validateNation(value)
  {
    if(value==='default')
    {
  this.nationHasError=true;
    }
    else{
      this.nationHasError=false;
    }
   

}
onSubmit(){
  console.log('Form submission is working');
      
}

}
