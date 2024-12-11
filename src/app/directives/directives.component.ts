import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  isVisible = false;
  isHighlighted = false;

  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes'];
  toggleStyle() {
    this.isHighlighted = !this.isHighlighted;
  }
  toggleMessage(){
  this.isVisible = !this.isVisible;

}
}
