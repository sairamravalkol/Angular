import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
 
  blogPosts:Blogpost[] = [];
  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new Blogpost('Blog post 1','Summary 1'));
    this.blogPosts.push(new Blogpost('Blog post 2','Summary 2'))
  }

}
