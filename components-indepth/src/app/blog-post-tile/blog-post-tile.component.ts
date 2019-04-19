import { Component, OnInit, Input } from '@angular/core';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: Blogpost;
  constructor() { }

  ngOnInit() {
   
  }

}
