import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { BeerCardComponent } from './ui/beer-card/beer-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerMonitorService } from './services/beer-monitor/beer-monitor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCardComponent,
    WeatherCardComponent,
    BeerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BeerMonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
