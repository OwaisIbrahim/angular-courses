import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean
} 

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    //emit to tell that something has changed 
    //this.isSelected is passed to all subscriber (where <favorite> is used)
    this.click.emit({ newValue: this.isSelected });
  }
}
