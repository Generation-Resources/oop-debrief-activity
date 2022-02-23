// Write your code here

class Outfit {
  constructor(top, bottom, shoes, bag) {
    this.top = top,
    this.bottom = bottom,
    this.shoes = shoes,
    this.bag = bag;
  }
  todaysOutfit() {
    console.log(`Today I am wearing a ${this.top}, ${this.bottom}, ${this.shoes}, and a ${this.bag} bag.`);
  };
};

const outfitOne = new Outfit('crop-top', 'jeans', 'jordans', 'louis vuitton');

const outfitTwo = new Outfit('blouse', 'skirt', 'boots', 'fendi');

outfitOne.todaysOutfit();
outfitTwo.todaysOutfit();

