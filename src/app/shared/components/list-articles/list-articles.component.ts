import { Component, Input, Output } from '@angular/core';
import { Article } from '../../interface/article.interface';

@Component({
  selector: 'list-articles',
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent {


   @Input() public articlesListArticleComponent: Article[]=[]



  //  public setListArticles(articles: Article[]){
  //    this.articlesListArticleComponent = articles;

  //  }

}
