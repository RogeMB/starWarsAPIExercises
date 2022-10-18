import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharactersDialogComponent } from './components/characters/characters-dialog/characters-dialog.component';
import { SpeciesComponent } from './components/species/species.component';
import { SpeciesDialogComponent } from './components/species/species-dialog/species-dialog.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    PageNotFoundComponent,
    CharactersDialogComponent,
    SpeciesComponent,
    SpeciesDialogComponent,
    MenuComponent,
  ],
  imports: [
    AppRoutingModule,
    ImportsMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
