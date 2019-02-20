import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  constructor(private router: Router,
    private api: ApiService,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.films = this.api.getByType('films');
  }

  openDetails(film) {
    const split = film.url.split('/');
    const filmId = split[split.length - 2];
    this.router.navigateByUrl(`menu/tabs/films/${filmId}`);
  }


  async openMenu() {
    const actionSheet = await this.actionSheetController.create({
      header: '',
      buttons: [{
        text: 'Go Memory book',
        handler: () => {
          this.router.navigateByUrl('/inside/menu/list');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    // No need to wait when sheet is ready
    actionSheet.present();
  }

}

