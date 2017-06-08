export class Keg {
  public pintsLeft: number = 124;
  public pintPrice: string = ((this.price / 124) * 4.5).toFixed(2);

  constructor(public name: string, public brand: string, public price: number, public abv: number) { }
}
