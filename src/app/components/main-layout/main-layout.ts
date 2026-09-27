import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './../../components/navigation/navigation';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-main-layout',
  imports: [Navigation, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
