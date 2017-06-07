import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-keg',
  template: `
        <div *ngIf="childSelectedKeg">
          <h3>Edit Keg info</h3>
          <label>Name: </label>
          <input name="keyName" [(ngModel)]="childSelectedKeg.name"><br>
          <label>Brand: </label>
          <input name="kegBrand" [(ngModel)]="childSelectedKeg.brand"><br>
          <label>Price: </label>
          <input name="kegPrice" [(ngModel)]="childSelectedKeg.price"><br>
          <label>ABV: </label>
          <input name="kegAbv" [(ngModel)]="childSelectedKeg.abv"><br>
          <button class="btn btn-success btn-sm" (click)="doneButtonClicked()">Save changes</button>
        </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
