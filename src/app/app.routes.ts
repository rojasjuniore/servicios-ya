import { RouterModule, Routes } from '@angular/router';

/*import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServiceRequestComponent } from './components/service-request/service-request.component';
import { FarewellComponent } from './components/farewell/farewell.component';*/

import {
    HomepageComponent,
    DashboardComponent,
    ServiceRequestComponent,
    FarewellComponent
} from './components/components';

const APP_ROUTES: Routes = [
    {
        path: '',
        data: { title: 'Home Page' },
        component: HomepageComponent,

    },
    {
        path: 'dashboard',
        data: { title: 'Dashboard' },
        component: DashboardComponent,

    },
    {
        path: 'serviceRequest/:id',
        data: { title: 'Service Request Component' },
        component: ServiceRequestComponent,

    },
    {
        path: 'farewell',
        data: { title: 'Farewell Component' },
        component: FarewellComponent,

    },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);