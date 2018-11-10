import { LogService } from './log.service';
import { Injectable } from '@angular/core';

// if you inject a service into another service, you need to give that service where you want to inject into
// (So where you set up the dependency in the constructor) you have to add the decorator @Injectable() to that service.
// This is required because Angulars dependency injector only works with classes which have a decorator.
// This decorator does not do much but it allows Angular to inject the service into our service.
@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice(); // slicing so we get copy and do not affect original array
    }

    return this.characters.filter(character => {
      return character.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog(
      'Changed side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }
}
