import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View11Component } from './view11/view11.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';

const providers: Provider[] = [];

@NgModule({
  declarations: [
    AppComponent,
    View11Component,
    View2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})

export class AppModule { }

export class App2SharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
