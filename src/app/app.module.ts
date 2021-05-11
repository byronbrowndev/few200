import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterCountByComponent } from './components/counter-count-by/counter-count-by.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { AppEffects } from './effects/app.effects';
import { ProductivityModule } from './features/productivity/productivity.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    NotFoundComponent,
    NavComponent,
    CounterCountByComponent
  ],
  imports: [
    BrowserModule,
    ProductivityModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects, AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
