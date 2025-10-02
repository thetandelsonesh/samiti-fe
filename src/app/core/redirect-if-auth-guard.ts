import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { Auth } from './auth';

export const redirectIfAuthGuard: CanMatchFn = (route, segments) => {
  const auth = inject(Auth);
  const router = inject(Router);
  return auth.isLoggedIn() ? router.createUrlTree(['dashboard']) : true;
};
