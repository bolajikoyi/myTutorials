import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

interface Pizza {
  id: string;
  name: string;
  price: number;
}

const getPizzas$: Observable<Pizza[]> = of([
  { id: 'j8O9sz', name: 'Pepperoni', price: 899 },
  { id: 'tMot06', name: 'Supreme', price: 999 },
  { id: 'x9sD3g', name: 'Sizzler', price: 899 },
]);

@Component({
  selector: 'app-observable-tutorial',
  templateUrl: './observable-tutorial.component.html',
  styleUrls: ['./observable-tutorial.component.scss'],
})
export class ObservableTutorialComponent
  implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('btn', { static: true })
  button!: ElementRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  buttonSubscription: any;
  source: any;
  keyup: any;
  newSrcArray: any;
  pizza$: Observable<Pizza[]> | undefined;
  data = [];

  constructor(private elm: ElementRef) {}
  // Observable constructor method
  obs = new Observable((observer) => {
    console.log(`observable starts`);
    setTimeout(() => observer.next(5), 1000);
    setTimeout(() => observer.next(10), 2000);
    setTimeout(() => observer.next(15), 3000);
    //setTimeout(() => observer.complete(), 4000);
    setTimeout(() => observer.next(20), 4000);
    setTimeout(() => observer.next(25), 5000);
  }).pipe(
    tap((data) => console.log(`tap ${data}`)),
    filter((res) => (res as number) > 0),
    tap((data) => console.log(`filter ${data}`)),
    map(
      (val) => {
        return (val as number) * 2;
      },
      tap((data) => console.log(`final ${data}`))
    )
  );

  // Create method
  obsUsingCreate = Observable.create(
    (observer: { next: (arg0: string) => void; complete: () => void }) => {
      observer.next('1');
      observer.next('2');
      observer.next('3');
      observer.complete();
    }
  );

  scrArray = from([1, 2, 3, 4, 5]);
  scrName = from(['John', 'Tom', 'Katy', 'Paul']);
  multiplyBy2() {
    this.newSrcArray = this.scrArray
      .pipe(
        map((val) => {
          return val * 2;
        })
      )
      .subscribe((val) => console.log(val));
  }
  upperCaseName() {
    this.scrName
      .pipe(
        map((val) => {
          return val.toUpperCase();
        })
      )
      .subscribe((val) => console.log(val));
  }
  multipleMaps() {
    console.log(`MultipleMaps`);
    this.scrArray
      .pipe(
        map((val) => {
          return val + 10;
        }),
        map((val) => {
          if (Number.isNaN(val)) {
            console.log(`Error occured in stream`);
            throw new Error(`Result is NaN`);
          }
          return val * 2;
        })
      )
      .subscribe((val) => console.log(val));
  }

  ngOnInit() {
    this.obs.subscribe(
      (val) => {
        //this.data.push(val);
        console.log(val);
      },
      (error) => console.log('error'),
      () => console.log('completed')
    );

    this.obsUsingCreate.subscribe(
      (val: any) => {
        console.log(val);
      },
      (error: any) => {
        console.log('error');
      },
      () => {
        console.log('complete');
      }
    );
    //Observable of
    let array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    let array2: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let obsof1 = of(array1, array2, 'Hello World', 100).subscribe(
      (val) => console.log(val),
      (error) => console.log('error'),
      () => console.log('complete')
    );

    //Observable from
    let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let array4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let obsFrom1 = from([array3, array4]).subscribe(
      (val) => console.log(val),
      (error) => console.log('error'),
      () => console.log('complete')
    );

    // let obsFrom2 = from(this.generateNos()).subscribe(
    //   (val) => console.log(val),
    //   (error) => console.log('error'),
    //   () => console.log('complete')
    // );

    //Obdervable from promise
    // let promiseSource = from(new Promise((resolve) => resolve('Hello World')));
    // let obsFrom3 = from(promiseSource).subscribe(
    //   (val) => console.log(val),
    //   (error) => console.log('error'),
    //   () => console.log('complate')
    // );

    this.upperCaseName();
    this.multipleMaps();

    this.pizza$ = getPizzas$;
  }

  // generateNos() {
  //   var i = 0;
  //   while (1 < 5) {
  //     i = i + 1;
  //   }
  // }

  //Observable fromEvent (Click event)
  buttonClick() {
    this.buttonSubscription = fromEvent(
      this.button.nativeElement,
      'click'
    ).subscribe((res) => console.log(res));
  }
  scroll() {
    this.source = fromEvent(window, 'scroll').subscribe((val) =>
      console.log(val)
    );
  }

  keyUp() {
    this.keyup = fromEvent(this.name.nativeElement, 'keyup');
    this.keyup.subscribe((val: any) => console.log(val));
  }
  ngAfterViewInit() {
    this.buttonClick();
    this.keyUp();
  }
  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
    this.source.unsubscribe();
    this.keyup.unsubscribe();
    this.newSrcArray.unsubscribe();
  }
}
