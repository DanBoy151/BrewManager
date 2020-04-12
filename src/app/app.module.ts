import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { BeerCardComponent } from './ui/beer-card/beer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCardComponent,
    DetailsComponent,
    WeatherCardComponent,
    BeerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
