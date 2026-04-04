import { Component } from '@angular/core';
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';

@Component({
  selector: 'app-momente',
  imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelHeader],
  templateUrl: './momente.html',
  styleUrl: './momente.scss',
})
export class Momente {


}
