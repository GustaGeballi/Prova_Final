import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'carros', component: CarrosComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
