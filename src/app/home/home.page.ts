import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public contact={
  name:"ENSET",
  email:"oumniaelha@gmail.com",
  tel:"0662343203",
  logo:"assets/images/logos.png",
  location:"assets/images/log.jpg"

}
  constructor() {}

}
