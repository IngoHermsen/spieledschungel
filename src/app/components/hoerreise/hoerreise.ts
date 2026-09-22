import { Component, ElementRef, ViewChild } from '@angular/core';

interface Chapter {
  title: string;
  file: string;
}

@Component({
  selector: 'app-hoerreise',
  templateUrl: './hoerreise.html',
  styleUrl: './hoerreise.scss',
})
export class Hoerreise {

  @ViewChild('journeyAudioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

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

  currentChapter = 0;

  /**
   * Kapitel auswählen
   */
  playChapter(index: number): void {
    this.currentChapter = index;

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
    if (this.currentChapter < this.chapters.length - 1) {

      this.currentChapter++;

      const audio = this.audioPlayer.nativeElement;

      audio.src = this.chapters[this.currentChapter].file;
      audio.load();
      audio.play();

    } else {

      // Geschichte ist komplett fertig
      this.currentChapter = 0;
    }
  }
}
