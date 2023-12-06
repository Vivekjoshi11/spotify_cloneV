import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
 
  public isSearchFiledVisible: boolean = false;
  sb: any;
  constructor(private router: Router){}
  ngOnInit(): void{
      this.sb.isSearchFiledVisible.subscribe((status: any)=>{
        this.isSearchFiledVisible = true;
      })
  }
  onNavigatetoSearch(){
    console.log('search');
    this.isSearchFiledVisible = true;
  }
  onNavigateToLogin(){
     this.router.navigate(['/','login']);
  }
}
