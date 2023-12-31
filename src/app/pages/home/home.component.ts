import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.services';
import { Route } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;
public songCards = [
  {
    thumbnail:
    'https://w7.pngwing.com/pngs/690/149/png-transparent-computer-icons-music-sound-k-song-miscellaneous-blue-text-thumbnail.png',
    title: 'Romantic Songs',
    description: 'Relax and inculge with beautiful piano pices',

},
{
  thumbnail:
  'https://w7.pngwing.com/pngs/690/149/png-transparent-computer-icons-music-sound-k-song-miscellaneous-blue-text-thumbnail.png',
  title: 'Peaceful Songs',
  description: 'Relax and inculge with beautiful piano pices',

},
{
  thumbnail:
  'https://w7.pngwing.com/pngs/690/149/png-transparent-computer-icons-music-sound-k-song-miscellaneous-blue-text-thumbnail.png',
  title: 'Dj Songs',
  description: 'Relax and inculge with beautiful piano pices',

},
{
  thumbnail:
  'https://w7.pngwing.com/pngs/690/149/png-transparent-computer-icons-music-sound-k-song-miscellaneous-blue-text-thumbnail.png',
  title: 'Romantic Songs',
  description: 'Relax and inculge with beautiful piano pices',

},
{ thumbnail:
  'https://w7.pngwing.com/pngs/690/149/png-transparent-computer-icons-music-sound-k-song-miscellaneous-blue-text-thumbnail.png',
  title: 'Romantic Songs',
  description: 'Relax and inculge with beautiful piano pices',
},


];
onNavigateToSearch: any;

constructor(private sb: SearchBarService){}
ngOnInit(): void{}

onNavigation(pagename: string){
  if(pagename === 'search'){
    this.sb.isSearchVisible.next(true);
  }
  else{
    this.sb.isSearchVisible.next(false);
  }
  
}
onNavigateToYourLibray(){
  // this['router'].navigate(['/','Your_library']);
  window.location.href = '/Your_library';
  
}
  
}
