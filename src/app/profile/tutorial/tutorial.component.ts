import { Component, OnInit } from '@angular/core';

interface tutorialLink {
  link: string;
  name: string;
}
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  tutorialLinks: tutorialLink[] = [
    { link: 'first', name: 'Tutorial One' },
    { link: 'second', name: 'Tutorial Two' },
    { link: 'third', name: 'Tutorial Three' },
    { link: 'fourth', name: 'Tutorial Four' },
    { link: 'fifth', name: 'Tutorial Five' },
    { link: 'sixth', name: 'Tutorial Six' },
    { link: 'seventh', name: 'Tutorial Seven' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
