import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
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
  bilderJson = '';

  ngOnInit() {
    this.http.get('assets/galerie-bilder.json').subscribe(data => {
      console.log('Bilder geladen:', data);
      this.bilderJson = JSON.stringify(data);
      console.log('bilderJson:', this.bilderJson);
    }); // ← hier fehlte die );
  }
}
