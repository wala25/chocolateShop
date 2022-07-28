import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  contact=new UntypedFormGroup({
    businessName: new FormControl(''),
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required)
  })
  
  notif='';
  loading=false
  submit(){
    if(!this.contact.invalid&&!this.loading){
       this.loading=true;
       fetch("/api/postform", {
        method: "POST", 
        body: JSON.stringify(
            this.contact.value
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
       })
      .then(r => r.json())
      .then(r=> {
          this.loading=false
          console.log('sent')
          console.log(r.ok)
       })
       .catch(e=>{
           this.loading=false
           console.log('err')
       })

    }
  }
  ngOnInit(): void {
  }

}
