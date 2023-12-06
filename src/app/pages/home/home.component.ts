import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  
}
