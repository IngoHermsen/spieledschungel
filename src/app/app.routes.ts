import { ExtraOptions, Routes } from '@angular/router';

import { Momente } from './components/pages/momente/momente';
import { Imprint } from './components/pages/imprint/imprint';
import { Räume } from './components/räume/räume';
import { UeberMich } from './components/pages/ueber-mich/ueber-mich';
import { Elternstimmen } from './components/pages/elternstimmen/elternstimmen';
import { HerzensSpuren } from './components/pages/herzens-spuren/herzens-spuren';
import { Kontakt } from './components/pages/kontakt/kontakt';
import { Eingewoehnung } from './components/pages/eingewoehnung/eingewoehnung';
import { Transparenz } from './components/pages/transparenz/transparenz';
import { FotoReise } from './components/pages/foto-reise/foto-reise';
import { DataProtection } from './components/data-protection/data-protection';

export const routes: Routes = [
    {path: 'momente', component: Momente},
    {path: 'ueberMich', component: UeberMich},
    {path: 'raeume', component: Räume},
    // {path: 'elternstimmen', component: Elternstimmen},
    // {path: 'herzens-spuren', component: HerzensSpuren},
    {path: 'kontakt', component: Kontakt},
    {path: 'eingewoehnung', component: Eingewoehnung},
    {path: 'impressum', component: Imprint},
    {path: 'transparenz', component: Transparenz},
    {path: 'foto-reise', component: FotoReise},
    {path: 'datenschutzerklaerung', component: DataProtection},
];

