import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: Observable<any>;
  isFavorite = false;

  constructor(private router: Router,
      private api: ApiService) { }

  ngOnInit() {
    this.people = this.api.getByType('people');
  }

  openDetails(person) {
    const split = person.url.split('/');
    const pid = split[split.length - 2];
    this.router.navigateByUrl(`menu/tabs/people/${pid}`);
  }

}
