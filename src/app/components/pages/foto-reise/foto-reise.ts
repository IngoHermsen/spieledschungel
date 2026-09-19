import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import './gallery.component'


@Component({
  selector: 'app-foto-reise',
  imports: [], // oder AsyncPipe wenn du async pipe nutzt],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './foto-reise.html',
  styleUrl: './foto-reise.scss',
})
export class FotoReise implements OnInit {
  private http = inject(HttpClient);
  bilderJson = signal<string | null>(null);

  ngOnInit() {
    this.http.get('assets/galerie-bilder.json').subscribe(data => {
      this.bilderJson.set(JSON.stringify(data));
    });
  }
}
