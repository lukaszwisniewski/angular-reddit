import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../article/article.model';

library.add(faTimes);

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  article: Article;
  showForm: boolean;

  @Output() addArt = new EventEmitter<Article>();

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    // console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.addArt.emit(new Article(title.value, link.value, 0));
    this.resetForm(title, link);
  }

  resetForm(title: HTMLInputElement, link: HTMLInputElement) {
    title.value = '';
    link.value = '';
  }

  toggleFormDisplay() {
    this.showForm = !this.showForm;
  }

  constructor() {
    this.showForm = true;
   }

  ngOnInit() {
  }

}
