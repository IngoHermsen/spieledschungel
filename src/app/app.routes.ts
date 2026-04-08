import { Routes } from '@angular/router';

import { Momente } from './components/pages/momente/momente';
import { Imprint } from './components/pages/imprint/imprint';
import { Räume } from './components/räume/räume';
import { UeberMich } from './components/pages/ueber-mich/ueber-mich';
import { Elternstimmen } from './components/pages/elternstimmen/elternstimmen';
import { HerzensSpuren } from './components/pages/herzens-spuren/herzens-spuren';
import { Kontakt } from './components/pages/kontakt/kontakt';
import { Urlaub } from './components/pages/urlaub/urlaub';

export const routes: Routes = [
    {path: 'momente', component: Momente},
    {path: 'ueberMich', component: UeberMich},
    {path: 'raeume', component: Räume},
    {path: 'elternstimmen', component: Elternstimmen},
    {path: 'herzens-spuren', component: HerzensSpuren},
    {path: 'kontakt', component: Kontakt},
    {path: 'urlaub', component: Urlaub},
];
