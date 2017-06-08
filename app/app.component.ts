import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';


@Component({  // 'decorator'
  selector: 'app-root',
  template: `
  <div class="container">

    <div class="row">
      <div class="col-sm-6">
        <keg-list [childKegList]="masterKegList" (clickSender1)="editKeg($event)" (clickSender2)="showKeg($event)"></keg-list>
      </div>
      <div class="col-sm-6">
        <keg-detail [childSelectedKegDetail]="selectedKegDetail" (hideButtonClickedSender)="hideKeg()" (sellPintClickedSender)="sellOnePint($event)" ></keg-detail>
      </div>
    </div>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()" ></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>

  </div>
  `
})


export class AppComponent {
  masterKegList: Keg[] = [ new Keg('Mirror Pond Pale Ale', 'Deschutes Brewery', 98, 4.5),
                  new Keg('Blue Dot IPA', 'Hair of the Dog', 112, 7),
                  new Keg('Budweiser Light', 'Budweiser', 125, 4)
                ];
  selectedKeg: null;
  // used to be "selectedKegDetail: null;" but this caused build errors
  selectedKegDetail: Keg;

  showKeg(clickedKegDetail) {
    this.selectedKegDetail = clickedKegDetail;
  }

  hideKeg() {
    this.selectedKegDetail = null;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  sellOnePint() {
    this.selectedKegDetail.pintsLeft -= 10;
  }

}
