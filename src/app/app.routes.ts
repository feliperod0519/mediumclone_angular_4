import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'register', loadChildren: () => import('../app/auth/components/auth.routes').then(m => m.registerRoutes) }
];
