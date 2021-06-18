import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './containers/carComponent/car-detail/car-detail.component';
import { CarsComponent } from './containers/carComponent/cars/cars.component';
import { CreateCarComponent } from './containers/carComponent/create-car/create-car.component';
import { EditCarComponent } from './containers/carComponent/edit-car/edit-car.component';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AboutComponent } from './components/about/about.component';
import { CarHeaderComponent } from './components/car-header/car-header.component';
import { CarFooterComponent } from './components/car-footer/car-footer.component';
import { CarBannerComponent } from './components/car-banner/car-banner.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CarBranchComponent } from './components/car-branch/car-branch.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { CarRelationComponent } from './components/car-relation/car-relation.component';
import { BranchDetailComponent } from './containers/branchComponent/branch-detail/branch-detail.component';
import { BranchesComponent } from './containers/branchComponent/branches/branches.component';
import { CreateBranchComponent } from './containers/branchComponent/create-branch/create-branch.component';
import { EditBranchComponent } from './containers/branchComponent/edit-branch/edit-branch.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './containers/contactComponent/contacts/contacts.component';
import { ContactDetailComponent } from './containers/contactComponent/contact-detail/contact-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';





@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarsComponent,
    CarDetailComponent,
    CreateCarComponent,
    EditCarComponent,
    HomeComponent,
    CarListComponent,
    AboutComponent,
    CarHeaderComponent,
    CarFooterComponent,
    CarBannerComponent,
    CarInfoComponent,
    CarBranchComponent,
    CarSearchComponent,
    CarRelationComponent,
    BranchDetailComponent,
    BranchesComponent,
    CreateBranchComponent,
    EditBranchComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ContactsComponent,
    ContactDetailComponent,
    ShoppingCartComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
