import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  login() {
    this.headerService.setAuth.next({ loginStatus: true });
  }

  logout() {
    this.headerService.setAuth.next({ loginStatus: false });
  }

  add() {
    this.headerService.setCount.next(1);
  }
  remove() {
    this.headerService.setCount.next(-1);
  }
}
