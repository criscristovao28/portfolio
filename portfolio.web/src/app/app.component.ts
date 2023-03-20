import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor( private contactService: ContactsService,private toastr: ToastrService)
  {
  
  }

  sendMessage()
  {
    
    
    this.contactService.addContact({
      Name:this.name,
      Email: this.email,
      Subject: this.subject,
      Message: this.message,
    }).subscribe(()=>{
      this.toastr.success('Mensagem enviada com sucesso');
      this.email='',
      this.name='';
      this.subject='',
      this.message=''
    })
  }
}
