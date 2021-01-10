import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedMovieName: string | undefined | any;
  @ViewChild(ChildComponent) child!: ChildComponent;
  movieFromChild!: string;

  isLoggedIn!: boolean;
  itemCount: number = 0;
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    //set login status
    this.headerService.setAuth.subscribe((msg: any) => {
      console.log(msg);
      this.isLoggedIn = msg.loginStatus;
    });

    //set product count
    this.headerService.setCount.subscribe((msg: any) => {
      this.itemCount = this.itemCount + msg < 1 ? 0 : this.itemCount + msg;
    });
  }

  onMovieSelection(movie: string) {
    console.log(movie);
    this.selectedMovieName = movie;
  }
  ngAfterViewInit(): void {
    console.log(this.child.getMovie());
  }
}
