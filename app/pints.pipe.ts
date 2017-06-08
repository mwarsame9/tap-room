import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';


@Pipe({
  name: "pints",
  pure: false
})


export class PintsPipe implements PipeTransform {


  transform(input: Keg[], desiredCompleteness) {
    var output: Keg[] = [];
    if(desiredCompleteness === "fullKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsLeft >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredCompleteness === "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsLeft <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
