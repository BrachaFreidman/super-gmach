import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'popper.js';
import 'bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit{
  title = 'angular2';
  
  constructor(private router:Router){}
ngOnInit(){
 /// this.router.navigate(["login"])
}
}
