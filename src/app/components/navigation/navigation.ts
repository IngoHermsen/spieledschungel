import { Component, inject, OnInit } from '@angular/core';
import { ViewService } from '../../services/view-service';

@Component({  
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  viewService = inject(ViewService);
  navIsOpen: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    
  }

 toggleNav() {
    this.navIsOpen = !this.navIsOpen;
  }

}
