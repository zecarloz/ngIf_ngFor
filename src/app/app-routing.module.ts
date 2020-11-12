import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , component : AppComponent },
  {path : 'primeiro-componente' , component : PrimeiroComponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
