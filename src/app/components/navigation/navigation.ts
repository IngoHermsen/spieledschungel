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
  expandableMenu: boolean;
  showMobileMenu: boolean = false;

  constructor() {
    this.expandableMenu = this.viewService.isMobileView;
  }

  ngOnInit(): void {
    
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }


}
