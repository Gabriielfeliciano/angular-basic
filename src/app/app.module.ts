import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
