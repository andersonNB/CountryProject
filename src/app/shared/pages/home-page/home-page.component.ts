import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../interface/article.interface';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  @Input() public listArticles: Article[] = [];

  @Output() public articleAdd: EventEmitter<Article[]> = new EventEmitter();

  public articles: Article = {
    title: '',
    description: '',
    price: 0,
    img: ''
  }


  public submitArticles(){
    console.log(this.articles);

    this.articleAdd.emit(this.listArticles);
  }

  onChangeImage(event:any):void{
    console.log(event)
  }

}
