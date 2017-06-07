import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-detail',
  template: `
    <div *ngIf="childSelectedKegDetail">
      <ul>
        <li> Name: {{childSelectedKegDetail.name}} </li>
        <li> Brand: {{childSelectedKegDetail.brand}} </li>
        <li> Price: {{childSelectedKegDetail.price}} </li>
        <li> ABV: {{childSelectedKegDetail.abv}} </li>
      </ul>
      <button class="btn btn-default btn-sm" (click)="hideButtonClicked()">Hide Details</button>
    </div>
  `
})


export class KegDetailComponent {
  @Input() childSelectedKegDetail: Keg;
  @Output() hideButtonClickedSender = new EventEmitter();

  hideButtonClicked() {
    this.hideButtonClickedSender.emit();
  }
}
