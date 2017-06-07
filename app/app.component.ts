// annotation, how it appears

import { Component } from '@angular/core';


// 'decorator'
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room template</h1>

    <ul>
       <li *ngFor="let currentKeg of kegs">{{currentKeg.name}} <button (click)="editKeg(currentKeg)">Edit Keg</button></li>
     </ul>

     <hr>
     <div *ngIf="selectedKeg">
       <h3>Edit Keg info</h3>
       <label>Name: {{selectedKeg.name}}</label>
       <input name="keyName" [(ngModel)]="selectedKeg.name"><br>
       <label>Brand: {{selectedKeg.brand}}</label>
       <input name="kegBrand" [(ngModel)]="selectedKeg.brand"><br>
       <label>Price: {{selectedKeg.price}}</label>
       <input name="kegPrice" [(ngModel)]="selectedKeg.price"><br>
       <label>ABV: {{selectedKeg.abv}}</label>
       <input name="kegAbv" [(ngModel)]="selectedKeg.abv"><br>
       <button (click)="finishedEditing()">Save changes</button>
      </div>

  </div>
  `
})

// class declaration, how it behaves
export class AppComponent {
  kegs: Keg[] = [ new Keg('Mirror Pond Pale Ale', 'Deschutes Brewery', 105, 4.5),
                  new Keg('Blue Dot IPA', 'Hair of the Dog', 110, 7),
                  new Keg('Budweiser Light', 'Budweiser', 125, 4)
                ];
  selectedKeg: null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
    console.log("finished editing clicked")
  }

}


export class Keg {
  public pintsLeft: number = 124;

  constructor(public name: string, public brand: string, public price: number, public abv: number) { }
}
