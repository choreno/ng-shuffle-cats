import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';


const routes: Routes = [
     {
        path: '',
        redirectTo: '/',
        pathMatch : 'full' //?? what is this ?? Options: 'full' or 'prefix'
      },
      

]; 


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
