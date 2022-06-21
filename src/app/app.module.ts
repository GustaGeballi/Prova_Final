import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
