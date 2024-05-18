import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../interface/article.interface';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  public listArticles: Article[] = [];

  public articles: Article = {
    title: '',
    description: '',
    price: 0,
    img: '',
  };

  public imageUrl: string = '';

  public submitArticles() {
    this.listArticles.push({ ...this.articles, img: this.imageUrl});
    console.log(this.listArticles);
  }

  onChangeImage(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
