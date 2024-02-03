// dashboard.module.ts

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
  { 
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: 'footer', component: FooterComponent },
      { path: 'header', component: HeaderComponent },
      // Add other child routes as needed
    ]
  },
  
];

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes)],
})
export class DashboardModule {}
