import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarBranchComponent } from './components/car-branch/car-branch.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BranchDetailComponent } from './containers/branchComponent/branch-detail/branch-detail.component';
import { BranchesComponent } from './containers/branchComponent/branches/branches.component';
import { CreateBranchComponent } from './containers/branchComponent/create-branch/create-branch.component';
import { EditBranchComponent } from './containers/branchComponent/edit-branch/edit-branch.component';
import { CarDetailComponent } from './containers/carComponent/car-detail/car-detail.component';
import { CarsComponent } from './containers/carComponent/cars/cars.component';
import { CreateCarComponent } from './containers/carComponent/create-car/create-car.component';
import { EditCarComponent } from './containers/carComponent/edit-car/edit-car.component';
import { ContactDetailComponent } from './containers/contactComponent/contact-detail/contact-detail.component';
import { ContactsComponent } from './containers/contactComponent/contacts/contacts.component';



const routes: Routes = [

  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'cars',component:CarsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'branches',component:BranchesComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'edit/:id',component:EditCarComponent},
  {path:'cars/:id',component:CarDetailComponent},
  {path:'create',component:CreateCarComponent},
  {path:'carInfo/:id',component:CarInfoComponent},
  {path:'carSearch',component:CarSearchComponent},
  {path:'carsBranch/:branchId',component:CarBranchComponent},
  {path:'editBranch/:id',component:EditBranchComponent},
  {path:'branches/:id',component:BranchDetailComponent},
  {path:'createBranch',component:CreateBranchComponent},
  {path:'contacts',component:ContactComponent},
  {path:'contactsAdmin',component:ContactsComponent},
  {path:'contacts/:id',component:ContactDetailComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
