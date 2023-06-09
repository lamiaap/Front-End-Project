import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomersComponent } from './customers/customers.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

const routes: Routes = [{
  path: "", component: LandingPageComponent
}, {
  path: "about", component: AboutComponent
}, {
  path: "customers", component: CustomersComponent
}, {
  path: "contact", component: ContactComponent
},{
  path: 'portfolio/:portfolioId', component: PortfolioDetailsComponent
}, {
  path: "**", redirectTo: ""
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
