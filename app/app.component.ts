import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';


@Component({  // 'decorator'
  selector: 'app-root',
  template: `
  <div class="container">
    <!-- masterKegList being passed to keg-list.component.ts AS name "childKegList"-->
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()" ></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>

  </div>
  `
})


export class AppComponent {
  masterKegList: Keg[] = [ new Keg('Mirror Pond Pale Ale', 'Deschutes Brewery', 105, 4.5),
                  new Keg('Blue Dot IPA', 'Hair of the Dog', 110, 7),
                  new Keg('Budweiser Light', 'Budweiser', 125, 4)
                ];
  selectedKeg: null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
   this.masterKegList.push(newKegFromChild);
 }

}
