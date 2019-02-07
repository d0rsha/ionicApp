import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.films = this.api.getByType('films');
  }

  openDetails(film) {
    const split = film.url.split('/');
    const filmId = split[split.length - 2];
    this.router.navigateByUrl(`/pages/tabs/films/${filmId}`);
  }


  goToPlanets() {
    this.router.navigateByUrl(`/pages/tabs/planets`);
  }

}

