import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BasicExampleLoadService } from '../basic-example-load.service';

@Component({
  selector: 'app-first-tutorial',
  templateUrl: './first-tutorial.component.html',
  styleUrls: ['./first-tutorial.component.scss'],
})
export class FirstTutorialComponent implements OnInit {
  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent:
        '<i class="fa fa-trash" style="sont-size: 32px"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel',
    },
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="fa fa-plus" style="sont-size: 32px"></i>',
    },
    edit: {
      confirmSave: 'true',
      editButtonContent: '<i class="fa fa-edit" style="sont-size: 32px"></i>',
    },
    columns: {
      id: {
        title: 'ID',
        editable: false,
        addable: false,
        width: '100px',
      },
      name: { title: 'Full Name', class: 'name-class' },
      username: { title: 'User Name', class: 'username-class' },
      email: { title: 'Email', class: 'email-class' },
    },
    attr: {
      class: 'table table-bordered',
    },
  };

  // data = [
  //   {
  //     id: 1,
  //     name: 'Leanne Graham',
  //     username: 'Bret',
  //     email: 'Sincere@april.biz',
  //   },
  //   {
  //     id: 2,
  //     name: 'Ervin Howell',
  //     username: 'Antonette',
  //     email: 'Shanna@melissa.tv',
  //   },
  //   {
  //     id: 3,
  //     name: 'Adedayo Koyi',
  //     username: 'Adedayo',
  //     email: 'adedayo.koyi@gmail.com',
  //   },
  //   {
  //     id: 4,
  //     name: 'Omobolanle Koyi',
  //     username: 'Omobolanle',
  //     email: 'omobolanle.koyi@yahoo.com',
  //   },
  //   {
  //     id: 5,
  //     name: 'Oluwafemi Koyi',
  //     username: 'Oluwafemi',
  //     email: 'femi.koyi@yahoo.com',
  //   },
  //   {
  //     id: 6,
  //     name: 'Damilola Olusoga',
  //     username: 'Damilola',
  //     email: 'damilola.olusoga@yahoo.com',
  //   },
  //   {
  //     id: 7,
  //     name: 'Abdulrahman Muhammed',
  //     username: 'Abdulrahman',
  //     email: 'abdulrahman.mohammed@yahoo.com',
  //   },
  //   {
  //     id: 8,
  //     name: 'Hameedah Ayotunde',
  //     username: 'Hameedah',
  //     email: 'hameedah.ayotunde@yahoo.com',
  //   },
  //   {
  //     id: 9,
  //     name: 'Folake Koyi',
  //     username: 'Folake',
  //     email: 'folake.koyi@yahoo.com',
  //   },
  //   {
  //     id: 10,
  //     name: 'Funmilayo Olaibo',
  //     username: 'Funmilayo',
  //     email: 'funmilayo.olaibo@gmail.com',
  //   },
  //   {
  //     id: 11,
  //     name: 'Yetunde Olaitan',
  //     username: 'Yetunde',
  //     email: 'yetunde.olaitan@yahoo.com',
  //   },
  //   {
  //     id: 12,
  //     name: 'Abayomi Koyi',
  //     username: 'Abayomi',
  //     email: 'abayomi.koyi@yahoo.com',
  //   },
  //   {
  //     id: 13,
  //     name: 'Likhitha Thakkalapally',
  //     username: 'Likhitha',
  //     email: 'likhitha.thakkalapally@gmail.com',
  //   },
  //   {
  //     id: 14,
  //     name: 'Nicholas DuBuque',
  //     username: 'Nicholas.Stanton',
  //     email: 'rey.padberg@rosamond.biz',
  //   },
  // ];
  source: LocalDataSource;
  constructor(protected service: BasicExampleLoadService) {
    this.source = new LocalDataSource();
    // this.source = new LocalDataSource(this.data);

    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {}

  // onSearch(query: string = '') {
  //   this.source.setFilter(
  //     [
  //       { field: 'id', search: query },
  //       { field: 'name', search: query },
  //       { field: 'username', search: query },
  //       { field: 'email', search: query },
  //     ],
  //     false
  //   );
  // }
}
