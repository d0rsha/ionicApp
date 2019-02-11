import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  person: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private http: HttpClient) { }



  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById('people', id).subscribe(
      response => {
        console.dir(response);

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
        console.dir(this.person);
      });
  }

  reload() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById('people', id).subscribe(
      response => {
        console.dir(response);

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
        console.dir(this.person);
      });
  }


}
