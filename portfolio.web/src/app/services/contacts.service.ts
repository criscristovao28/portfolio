
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  apiurl="https://localhost:7193/Contacts";

  constructor(private http:HttpClient) { }

  addContact(contat:Contact)
  {
    return this.http.post(this.apiurl, contat);
  }
}
