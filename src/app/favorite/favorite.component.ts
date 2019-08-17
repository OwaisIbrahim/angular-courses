import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean
} 

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
      .glyphicon {
        border: 1px solid;
      padding:5px 10px 5px 40px;
      background-repeat: no-repeat;
      background-position: 10px center;
      background-color: red;
      border-radius: 3px;
      }
    `
  ]
})
export class FavoriteComponent {
 
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    console.log("STATE CHANGED", this.isSelected)
    //emit to tell that something has changed 
    //this.isSelected is passed to all subscriber (where <favorite> is used)
    this.click.emit({ newValue: this.isSelected });
  }
}
