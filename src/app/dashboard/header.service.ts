import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  setAuth = new Subject<{}>();
  setCount = new Subject<Number>();

  constructor() {}
}
