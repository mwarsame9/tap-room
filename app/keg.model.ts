export class Keg {
  public pintsLeft: number = 124;
  public pintPrice: string = ((124 / this.price) * 4).toFixed(2);

  constructor(public name: string, public brand: string, public price: number, public abv: number) { }
}
