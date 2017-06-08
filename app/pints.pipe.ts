import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';


@Pipe({
  name: "pints",
  pure: false
})


export class PintsPipe implements PipeTransform {

  transform(input: Keg[], desiredCompleteness){
    var output: Keg[] = [];
    if(desiredCompleteness === "incompleteKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsLeft >= 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completeKegs") {
      for (var j = 0; j < input.length; j++) {
        if (input[j].pintsLeft <= 100) {
          output.push(input[j]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
