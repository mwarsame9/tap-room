import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
     <label>Enter Keg Name:</label>
     <input #newName>   <!--#newName is a ' template reference variable'-->
     <label>Enter Keg Brand:</label>
     <input #newBrand>
     <label>Enter Keg Price:</label>
     <input #newPrice>
     <label>Enter Keg ABV:</label>
     <input #newABV>
     <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newABV.value); newName.value=''; newBrand.value=''; newPrice.value=''; newABV.value='';">Add</button>
    </div>


  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
