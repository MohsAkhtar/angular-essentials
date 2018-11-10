import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'Light' },
    { display: 'Dark', value: 'Dark' }
  ];
  swService: StarWarsService;
  defaultName = 'Obi-Wan';

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {}

  onSubmit(submittedForm) {
    // because form has required this will return if user has not input text
    if (submittedForm.invalid) {
      return;
    }
    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}
