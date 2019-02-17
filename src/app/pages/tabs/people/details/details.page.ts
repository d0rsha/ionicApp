import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavoriteService } from '../../../../services/favorite.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  person: any;
  isFavorite = false;
  personId = null;

  constructor(private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private http: HttpClient,
    private favoriteService: FavoriteService) { }



  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById('people', id).subscribe(
      response => {
        // fetch homeworld
        this.http.get(response['homeworld']).subscribe(
          planetResponse => {
            response['homeworld'] = planetResponse['name'];
          }
        );

        // Fetch films
        for (let i = 0; i < response['films'].length; i++) {
          this.http.get(response['films'][i]).subscribe(
            planetResponse => {
              response['films'][i] = planetResponse['title'];
            }
          );
        }

        this.person = response;
      });

      this.favoriteService.isFavorite('people', this.personId).then(isFav => {
        this.isFavorite = isFav;
      });
  }

  reload() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById('people', id).subscribe(
      response => {
        // fetch homeworld
        this.http.get(response['homeworld']).subscribe(
          planetResponse => {
            response['homeworld'] = planetResponse['name'];
          }
        );

        // Fetch films
        for (let i = 0; i < response['films'].length; i++) {
          this.http.get(response['films'][i]).subscribe(
            planetResponse => {
              response['films'][i] = planetResponse['title'];
            }
          );
        }

        this.person = response;
      });
  }

  favoritePerson() {
    this.favoriteService.favoritePerson(this.personId).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoritePerson() {
    this.favoriteService.unfavoritePerson(this.personId).then(() => {
      this.isFavorite = false;
    });
  }



}
