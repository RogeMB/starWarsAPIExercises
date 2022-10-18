import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from './components/characters/characters.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharactersDialogComponent } from './components/characters/characters-dialog/characters-dialog.component';
import { SpeciesComponent } from './components/species/species.component';
import { SpeciesDialogComponent } from './components/species/species-dialog/species-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    PageNotFoundComponent,
    CharactersDialogComponent,
    SpeciesComponent,
    SpeciesDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
