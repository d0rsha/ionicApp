import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const DB = 'db-';
const FILM_KEY = 'films';
const PERS_KEY = 'people';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private storage: Storage) { }

  getAllFavorites(type) {
    return this.storage.get(DB + type);
  }

  isFavorite(type, id) {
    return this.getAllFavorites(type).then(result => {
      return result && result.indexOf(id) !== -1;
    });
  }

  favoriteFilm(filmId) {
    return this.getAllFavorites(FILM_KEY).then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(DB + FILM_KEY, result);
      } else {
        return this.storage.set(DB + FILM_KEY, [filmId]);
      }
    });
  }

  unfavoriteFilm(filmId) {
    return this.getAllFavorites(FILM_KEY).then(result => {
      if (result) {
        const index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(DB + FILM_KEY, result);
      }
    });
  }


  favoritePerson(personId) {
    return this.getAllFavorites(FILM_KEY).then(result => {
      if (result) {
        result.push(personId);
        return this.storage.set(DB + PERS_KEY, result);
      } else {
        return this.storage.set(DB + PERS_KEY, [personId]);
      }
    });
  }

  unfavoritePerson(personId) {
    return this.getAllFavorites(PERS_KEY).then(result => {
      if (result) {
        const index = result.indexOf(personId);
        result.splice(index, 1);
        return this.storage.set(DB + PERS_KEY, result);
      }
    });
  }


}


