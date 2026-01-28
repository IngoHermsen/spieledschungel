import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';

export const routes: Routes = [
    {path: 'welcome', component: Welcome},
    {path: 'about', component: About},
    {path: 'facility', component: Facility},
    {path: 'food', component: Food},
    {path: 'registration', component: Registration},
    {path: 'testimonials', component: Testimonials},
    {path: 'contact', component: Contact},
    {path: 'imprint', component: Imprint},
];
