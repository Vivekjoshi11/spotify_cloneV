import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { YourLibraryComponent } from './pages/your-library/your-library.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'Your_library', component: YourLibraryComponent},
  {path: 'Play_list' , component:PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
