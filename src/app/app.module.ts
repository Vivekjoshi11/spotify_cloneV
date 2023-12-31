import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PlaysignupComponent } from './pages/playsignup/playsignup.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ButtonComponent } from './components/button/button.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YourLibraryComponent } from './pages/your-library/your-library.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PlaylistComponent,
    PlaysignupComponent,
    LogInComponent,
    ButtonComponent,
    SongCardComponent,
    TopNavComponent,
    YourLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
