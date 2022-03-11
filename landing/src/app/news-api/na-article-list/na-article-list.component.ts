import { Article, NewsApiService } from './../news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.css']
})
export class NaArticleListComponent implements OnInit {

  articles: Article[] = [];
  numberOfpages: number = 0;

  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.pagesOutput.subscribe(articles => {
      this.articles = articles;
    })

    this.newsApiService.numberOfPages.subscribe((number) => {
      this.numberOfpages = number;
    });

    this.newsApiService.getPage(1);
  }

  ngOnInit(): void {
  }

  changePage(pageNumber: number) {
    this.newsApiService.getPage(pageNumber);
  }



}
