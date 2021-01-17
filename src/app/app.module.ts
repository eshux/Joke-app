import { BrowserModule } from '@angular/platform-browser';
import { JokeCardComponent } from './jokes/joke-card/joke-card.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesFormComponent } from './jokes-form/jokes-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokesFormComponent,
    JokeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
