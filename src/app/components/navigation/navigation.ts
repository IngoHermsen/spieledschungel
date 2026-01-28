import { Component, inject, OnInit } from '@angular/core';
import { ViewService } from '../../services/view-service';
import { RouterLink } from "@angular/router";

@Component({  
  selector: 'app-navigation',
  imports: [RouterLink],
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
