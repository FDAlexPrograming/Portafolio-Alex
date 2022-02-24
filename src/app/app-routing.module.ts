import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{path: 'porfolio', component: PorfolioComponent},
                        {path:'login', component: LoginComponent},
                        {path:'register', component: RegisterComponent},
                        {path: '', redirectTo: '/porfolio', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
