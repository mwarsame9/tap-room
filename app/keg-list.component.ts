import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="completedKegs">Completed Kegs</option>
      <option value="incompleteKegs" selected="selected">Incomplete Kegs</option>
    </select>

      <ul>
        <li *ngFor="let currentKeg of childKegList | pints:filterByCompleteness"> {{currentKeg.name}} <button class="btn btn-info btn-sm" (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button> <button class="btn btn-default btn-sm" (click)="showDetailButtonHasBeenClicked(currentKeg)">Details</button> </li>
      </ul>
  `
})


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender1 = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();

  filterByCompleteness: string = "incompleteKegs";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender1.emit(kegToEdit);
  }
  showDetailButtonHasBeenClicked(kegToShow: Keg) {
    this.clickSender2.emit(kegToShow);
  }

}
