import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './views/home/home.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducer, metaReducers } from './core/store/app.store';
import { HttpClientModule } from '@angular/common/http';
import { MenuPipe } from './commons/pipe/menu.pipe';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuPipe,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
