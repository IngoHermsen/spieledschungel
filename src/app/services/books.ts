import { Injectable } from '@angular/core';
import { PageImage } from '../interfaces/page-image';

@Injectable({
  providedIn: 'root',
})
export class Books {
  parentsBookImages: PageImage[] = [
   {
    imagePath:"assets/flipbook/cover-kinderbuch.png",
    altText: "Logo-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/Willkommen.png",
    altText: "Willkommen-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/Kennenlernen.png",
    altText: "Kennenlernen-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/Eingewoehnung.png",
    altText: "Eingewoehnung-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/Vertrauen.png",
    altText: "Vertrauen-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/Zusammen-mit-Eltern.png",
    altText: "Zusammen-mit-Eltern-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/sanftes_ankommen.png",
    altText: "sanftes-ankommen-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/Ruhe_spueren.png",
    altText: "Ruhe-spueren-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/Individualitaet.png",
    altText: "Individualität-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/besondere-Momente.png",
    altText: "besondere-Momente-Bild-und-Text"
  },
  {
    imagePath:"assets/flipbook/(Ende)-Wohlfuehlort.png",
    altText: "Wohlfuehlort-Bild-und-Text"
  }
  ]
}
