export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

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
  }
}
