import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./views/user/sing-in-form/sing-in-form.component').then(
        (m) => m.SingInFormComponent
      ),
  },
];
