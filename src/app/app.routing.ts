import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '**', redirectTo: 'countries' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
