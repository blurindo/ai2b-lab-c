import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Person } from '../person';
import { PersonLsService } from '../person-ls.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  personId?: number;
  person?: Person
  private readonly _route: ActivatedRoute;
  private readonly _personLsService: PersonLsService

  constructor(route: ActivatedRoute, personLsService: PersonLsService) {
    this._route = route;
    this._personLsService = personLsService;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.personId = params['id'];
      this.person = this.personId
        ? this._personLsService.getPerson(this.personId)
        : undefined
    })
  }
}
