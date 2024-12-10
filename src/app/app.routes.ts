import { Routes } from '@angular/router';
import { CheckoutComponent } from './features/pix/pages/checkout/checkout.component';
import { HomeComponent } from './features/pix/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
