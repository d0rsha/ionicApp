import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FavoriteService } from '.././../../../services/favorite.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  film: any;
  isFavorite = false;
  filmId = null;

  constructor(private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private emailComposer: EmailComposer,
    private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getById('films', this.filmId).subscribe(res => {
      this.film = res;
    });

    this.favoriteService.isFavorite('films', this.filmId).then(isFav => {
      this.isFavorite = isFav;
    });
  }

  favoriteFilm() {
    this.favoriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
      this.isFavorite = false;
    });
  }

  shareFilm() {
    const email = {
      to: 'avrethem@gmail.com',
      subject: 'Woao! This is a good one: ' + this.film.title,
      body: 'Check this out<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
