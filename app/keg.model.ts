export class Keg {
  public pintsLeft: number = 124;
  public pintPrice: string = "";

  constructor(public name: string, public brand: string, public price: number, public abv: number) { }
}
