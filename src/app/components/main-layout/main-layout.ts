import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navigation } from './../../components/navigation/navigation';
import { Footer } from '../footer/footer';
import { ViewService } from '../../services/view-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  imports: [Navigation, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  public viewService = inject(ViewService);

  ngOnInit() {

  }
}
