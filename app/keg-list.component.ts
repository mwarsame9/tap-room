import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
      <ul>
        <li *ngFor="let currentKeg of childKegList">{{currentKeg.name}} <button class="btn btn-info btn-sm" (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button></li>
      </ul>
  `
})


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
