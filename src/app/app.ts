import { Component, ElementRef, inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Navigation } from './components/navigation/navigation';
import { Modal } from './components/modal/modal';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ViewService } from './services/view-service';
import { KeyControlService } from './services/key-control';
import { AudioService } from './services/audio-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Navigation, Modal, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  public routeIsStandalone = false;

  viewService = inject(ViewService);
  keyControlService = inject(KeyControlService);
  audioService = inject(AudioService);

  controlKey: string | null = null;

  @ViewChild('mainLogo') mainLogo!: ElementRef<HTMLElement>;
  @ViewChild('activeContent') activeContent!: ElementRef<HTMLElement>;


  ngOnInit(): void {
    this.audioService.init();
    this.keyControlService.setKeyListeners();
    this.blinkingEyes();

    // Check route for standalone flag in route.ts 
    this.router.events.pipe(
      // 1. Filtern, sodass wir nur reagieren, wenn die Navigation abgeschlossen ist
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // 2. Den Routen-Baum bis nach unten zur tiefsten aktiven Route durchlaufen
      let currentRoute = this.activatedRoute;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
        console.log('currentRoute', currentRoute)
      }

      // 3. Das Data-Attribut aus dem Snapshot auslesen
      this.routeIsStandalone = currentRoute.snapshot.data['StandaloneComponent'];
      // Hier kommt später deine Basis-Logik/Reaktion hin
    
    });

  }

  blinkingEyes() {
    const randomTimeout = Math.floor(Math.random() * (10000 - 2500 + 1)) + 2500;
    const blinkTimeout = setTimeout(() => {
      this.mainLogo.nativeElement.classList.add('hide-logo');
      setTimeout(() => {
        this.mainLogo.nativeElement.classList.remove('hide-logo');
      }, 170);

      this.blinkingEyes();
    }, randomTimeout);
  }
}
