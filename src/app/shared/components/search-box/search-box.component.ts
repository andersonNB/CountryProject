import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input() public placeHolder:string = '';
  @Output() public onValue: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('txtSearch')
  public input!: ElementRef<HTMLInputElement>;


  searchBoxByCapital():void{
    console.log(this.input.nativeElement.value)
    this.onValue.emit(this.input.nativeElement.value);
  }

}
