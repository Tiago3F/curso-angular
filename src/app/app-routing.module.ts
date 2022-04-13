import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ProductCrudComponent } from './components/views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { LoginComponent } from './components/login/login.component';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path: "products",
  component: ProductCrudComponent, canActivate: [AuthGuardService]
},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},
{
  path: "home",
  component: HomeComponent, canActivate: [AuthGuardService]
},
{
  path: "**",
  component: LoginComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuardService],
})
export class AppRoutingModule { }
