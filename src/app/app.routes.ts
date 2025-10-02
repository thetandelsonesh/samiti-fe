import { Routes } from '@angular/router';
import { AppLayout } from './layouts/app-layout/app-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { authGuard } from './core/auth-guard';
import { redirectIfAuthGuard } from './core/redirect-if-auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/app/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'members',
        loadComponent: () =>
          import('./pages/app/members/members').then(m => m.Members),
      },
      {
        path: 'meetings',
        loadComponent: () =>
          import('./pages/app/meetings/meetings').then(m => m.Meetings),
      },
      {
        path: 'notices',
        loadComponent: () =>
          import('./pages/app/notices/notices').then(m => m.Notices),
      },
    ]
  },
  {
    path: '',
    component: AuthLayout,
    canActivate: [redirectIfAuthGuard],  // ✅ block if already logged in
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login').then(m => m.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth/register/register').then(m => m.Register),
      },
    ]
  }
];
