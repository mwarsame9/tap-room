import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
      <ul>
        <li *ngFor="let currentKeg of childKegList"> {{currentKeg.name}} <button class="btn btn-info btn-sm" (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button> <button class="btn btn-default btn-sm" (click)="showDetailButtonHasBeenClicked(currentKeg)">Details</button> </li>
      </ul>
  `
})


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender1 = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender1.emit(kegToEdit);
  }
  showDetailButtonHasBeenClicked(kegToShow: Keg) {
    this.clickSender2.emit(kegToShow);
  }

}
