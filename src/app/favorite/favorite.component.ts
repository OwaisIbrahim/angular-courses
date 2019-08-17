import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean
} 

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Native
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
