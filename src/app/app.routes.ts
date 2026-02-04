import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Facility } from './components/facility/facility';
import { Food } from './components/food/food';
import { Registration } from './components/registration/registration';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Imprint } from './components/imprint/imprint';

export const routes: Routes = [
    {path: '', redirectTo: 'Willkommen',pathMatch: 'full'},
    {path: 'Willkommen', component: Welcome},
    {path: 'Einrichtung', component: Facility},
    {path: 'Verpflegung', component: Food},
    {path: 'Anmeldung', component: Registration},
    {path: 'Referenzen', component: Testimonials},
    {path: 'Kontakt', component: Contact},
    {path: 'Impressum', component: Imprint},
];
