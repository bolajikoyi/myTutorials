import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { HeaderService } from '../dashboard/header.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() title: 'string' | any | undefined;
  @Input() scaryMovies: 'string' | any | undefined;
  @Input() johnMovies: 'string' | any | undefined;
  @Output() selectedMovie = new EventEmitter();

  seletedMatrixMovie: string | undefined;
  myFavoriteMovieInChild!: string;

  constructor(private headerService: HeaderService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.scaryMovies) {
      console.log('Scary movie changed');
    }
    if (changes.johnMovies) {
      console.log('John movie changed');
    }
  }

  ngOnInit(): void {
    this.myFavoriteMovieInChild = 'Eran Iya Oshogbo';
  }

  sendSelectedMovie() {
    this.selectedMovie.emit(this.seletedMatrixMovie);
  }

  getMovie() {
    return this.myFavoriteMovieInChild;
  }
}
