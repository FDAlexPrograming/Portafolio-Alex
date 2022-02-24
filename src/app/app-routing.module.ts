import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { RegisterComponent } from './register/register.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [{path: 'porfolio', component: PorfolioComponent,canActivate:[GuardGuard]},
                        {path:'register', component: RegisterComponent},
                        {path: '', redirectTo: '/register', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
