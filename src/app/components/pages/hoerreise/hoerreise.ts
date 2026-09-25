import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ViewService } from '../../../services/view-service';

interface Chapter {
  title: string;
  file: string;
}

@Component({
  selector: 'app-hoerreise',
  templateUrl: './hoerreise.html',
  styleUrl: './hoerreise.scss',
})
export class Hoerreise implements OnInit {
  public viewService = inject(ViewService);
  public currentChapterIdx: number = 0;
  public currentTitle: string | null = null;

  @ViewChild('journeyAudioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngOnInit(): void {
    this.currentTitle = this.chapters[this.currentChapterIdx].title
    console.log(this.currentTitle)
    this.viewService.closeModal();
  }

  public chapters: Chapter[] = [
    {
      title: 'Willkommen im SpieleDschungel',
      file: 'assets/audio/hoer-reise/01 - audio - Willkommen.mp3'
    },
    {
      title: 'Wer ist eigentlich Marie?',
      file: 'assets/audio/hoer-reise/02 - audio - Wer-ist-eigentlich-Marie.mp3'
    },
    {
      title: 'Vertrauen darf Zeit brauchen',
      file: 'assets/audio/hoer-reise/03 - audio - Vertrauen.mp3'
    },
    {
      title: 'Feinfühlig im Dschungeltag ankommen',
      file: 'assets/audio/hoer-reise/04 - audio - Ankommen.mp3'
    },
    {
      title: 'Komm mit durch einen Dschungeltag',
      file: 'assets/audio/hoer-reise/05 - audio - Komm-mit.mp3'
    },
    {
      title: 'Unsere besondere Abholzeit',
      file: 'assets/audio/hoer-reise/06 - audio - Abholzeit.mp3'
    },
    {
      title: 'Tschüss aus dem Spieledschungel',
      file: 'assets/audio/hoer-reise/07 - audio - Tschüss.mp3'
    }
  ];

  /**
   * Kapitel auswählen
   */
  playChapter(index: number): void {
    this.currentChapterIdx = index;
    this.currentTitle = this.chapters[this.currentChapterIdx].title;

    const audio = this.audioPlayer.nativeElement;

    audio.src = this.chapters[index].file;
    audio.load();
    audio.play();
  }

  /**
   * Wird aufgerufen, wenn ein Kapitel fertig ist.
   */
  onChapterEnded(): void {

    // Gibt es noch ein weiteres Kapitel?
    if (this.currentChapterIdx < this.chapters.length - 1) {

      this.currentChapterIdx++;
      this.currentTitle = this.chapters[this.currentChapterIdx].title;


      const audio = this.audioPlayer.nativeElement;

      audio.src = this.chapters[this.currentChapterIdx].file;
      audio.load();
      audio.play();

    } else {

      // Geschichte ist komplett fertig
      this.currentChapterIdx = 0;
    }
  }

  setActiveChapter() {
  }
}
