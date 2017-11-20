import { RouterModule, Routes } from '@angular/router';
import {
    HomepageComponent,
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
        path: 'serviceRequest',
        data: { title: 'Service Request Component' },
        component: ServiceRequestComponent,

    },
    {
        path: 'Farewell',
        data: { title: 'Farewell Component' },
        component: FarewellComponent,

    },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);