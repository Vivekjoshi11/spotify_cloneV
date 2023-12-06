import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
[x: string]: any;
  @Input() public plsylidtthumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  constructor() {}

  ngOnInit(): void {
      
  }
  
}
