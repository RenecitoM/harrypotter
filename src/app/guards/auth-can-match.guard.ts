import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

export const authCanMatchGuard: CanMatchFn = (route, segments) => {
  const authService= inject(AuthService);
    return authService.getAuthToken();
  
};
