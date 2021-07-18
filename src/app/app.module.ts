import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventService } from './services/event.service';
import { EventFactoryService } from './factory/event-factory.service';
import { AppEvents } from './interfaces/app-events';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, EventFactoryService, AppEvents],
  bootstrap: [AppComponent]
})
export class AppModule { }
