import { Component } from '@angular/core';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  name!:string;
  email!:string;
  subject!:string;
  message!:string;

  constructor( private contactService: ContactsService)
  {
  
  }

  sendMessage()
  {
    console.log("Estou no metodo");
    
    this.contactService.addContact({
      Name:this.name,
      Email: this.email,
      Subject: this.subject,
      Message: this.message,
    }).subscribe(()=>{
      this.email='',
      this.name='';
      this.subject='',
      this.message=''
    })
  }
}
