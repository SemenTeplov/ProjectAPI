import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CardPopularNewsComponent } from './card-popular-news/card-popular-news.component';
import { ListPopularComponent } from './list-popular/list-popular.component';
import { ListSportsComponent } from './list-sports/list-sports.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardPopularNewsComponent,
    ListPopularComponent,
    ListSportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
