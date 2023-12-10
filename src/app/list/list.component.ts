import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonLsService } from '../person-ls.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: Person[] = [];
  private readonly _personService : PersonLsService;

  constructor(personService: PersonLsService) {
    this._personService = personService;
  }

  ngOnInit(): void {
    this.people = this._personService.getAll();
  }

  delete(index: number): void {
    if (confirm("Are you sure?")) {
      this._personService.deletePerson(index);
      this.people = this._personService.getAll();
    }
  }
}
