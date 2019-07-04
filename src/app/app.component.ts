import { Component } from '@angular/core';
import { Article } from './components/article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; // or Array<Article>

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular homepage', 'http://angular.io', 1),
      new Article('Instagram', 'https://instagram.com/marzeniatracawaznosc', 4),
      new Article('Wykop', 'https://wykop.pl', 5)
    ];
  }

  addArticle(article: Article) {
    this.articles.push(article);
    console.log(this.articles);
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
