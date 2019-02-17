import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  planets: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.planets = this.api.getByType('planets');
  }

  openDetails(planet) {
    const split = planet.url.split('/');
    const pid = split[split.length - 2];
    // Pay careful attention to ` `-string notation and not ' '-string; Escapes {} chars
    this.router.navigateByUrl(`menu/tabs/planets/${pid}`);
  }

}
