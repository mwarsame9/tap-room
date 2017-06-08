import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-detail',
  template: `
    <div *ngIf="childSelectedKegDetail">
      <ul>
        <li> <b>Name:</b>  {{childSelectedKegDetail.name}} </li>
        <li> <b>Brand:</b>   {{childSelectedKegDetail.brand}} </li>
        <li> <b>Keg Price:</b>   \${{childSelectedKegDetail.price}}\.00 </li>
        <li> <b>ABV:</b>   {{childSelectedKegDetail.abv}}\% </li>
        <li> <b>Pints left:</b>   {{childSelectedKegDetail.pintsLeft}} </li>
        <li> <b>Price per pint:</b>   \${{childSelectedKegDetail.pintPrice}} </li>
      </ul>
      <button class="btn btn-default btn-sm" (click)="hideButtonClicked()">Hide Details</button>
      <button class="btn btn-success btn-sm" (click)="sellPintClicked()">Sell Pint</button>
    </div>
  `
})


export class KegDetailComponent {
  @Input() childSelectedKegDetail: Keg;
  @Output() hideButtonClickedSender = new EventEmitter();
  @Output() sellPintClickedSender = new EventEmitter();

  hideButtonClicked() {
    this.hideButtonClickedSender.emit();
  }

  sellPintClicked() {
    this.sellPintClickedSender.emit()
  }

}
