import { fromEvent, Subscription } from 'rxjs';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyControlService {
  private keySub?: Subscription;
  public matchingKey = signal< string | null>(null);

  setKeyListeners() {
    this.keySub = fromEvent<KeyboardEvent>(document, 'keydown')
      .subscribe(event => {
        const eventKey: string = event.key;
        console.log('event Key:', eventKey)
        switch (eventKey) {
          case 'Escape':
            this.matchingKey.set(eventKey);
            break;
          case 'ArrowLeft':
            this.matchingKey.set(eventKey);
            break;
          case 'ArrowRight':
            this.matchingKey.set(eventKey);
            break;
        }
      });
      console.log('key Sub', this.keySub)
  }

  stopKeyListeners() {
    this.matchingKey.set(null);
    this.keySub?.unsubscribe();
    this.keySub = undefined;
  }

}