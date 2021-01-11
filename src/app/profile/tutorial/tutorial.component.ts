import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line: class-name
interface tutorialLink {
  link: string;
  name: string;
  sublink?: { link: string; name: string }[];
}
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  tutorialLinks: tutorialLink[] = [
    {
      link: 'first',
      name: 'ng2-smart-table',
      sublink: [
        { link: 'smartTable1', name: 'First Table' },
        { link: 'smartTable2', name: 'Second Table' },
      ],
    },
    { link: 'second', name: 'Angular Material' },
    { link: 'third', name: 'Nebular' },
    { link: 'fourth', name: 'Tutorial Four' },
    { link: 'fifth', name: 'Tutorial Five' },
    { link: 'sixth', name: 'Tutorial Six' },
    { link: 'seventh', name: 'Tutorial Seven' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
