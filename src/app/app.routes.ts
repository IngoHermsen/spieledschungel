import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Food } from './components/food/food';
import { Imprint } from './components/imprint/imprint';
import { Book } from './components/book/book';

export const routes: Routes = [
    {path: '', redirectTo: 'Willkommen',pathMatch: 'full'},
    
];
