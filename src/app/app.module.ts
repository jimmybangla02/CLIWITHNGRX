import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MenuPipe } from './common/pipe/menu.pipe';
import { ErrorsModule } from './views/errors/errors.module';
import { HeaderModule } from './layout/header/header.module';
import { FooterModule } from './layout/footer/footer.module';
import { NavigationModule } from './layout/navigation/navigation.module';
import { ProductDetailsModule } from './views/home/product-details/product-details.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    NavigationModule,
    HomeModule,
    ProductDetailsModule,
    ErrorsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
