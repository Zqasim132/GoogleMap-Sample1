import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDpfZsdAV2xTCjEieMf4bnBJlKP5EI4zY',
      libraries: ['places']
    })
  ],
  // https://maps.googleapis.com/maps/api/js?key=AIzaSyCDpfZsdAV2xTCjEieMf4bnBJlKP5EI4zY&libraries=places
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
