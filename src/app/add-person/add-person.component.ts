import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonLsService } from '../person-ls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  private readonly _personService : PersonLsService;
  private readonly _router: Router;
  person: Person = {
    address: {},
  }

  constructor(personService: PersonLsService, router: Router) {
    this._personService = personService;
    this._router = router;
  }

  save() {
    this._personService.addPerson(this.person);
    this._router.navigate(['/list']);
  }

  ngOnInit() {
  }
}
