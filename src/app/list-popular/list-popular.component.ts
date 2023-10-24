import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-popular',
  templateUrl: './list-popular.component.html',
  styleUrls: ['./list-popular.component.css']
})
export class ListPopularComponent implements OnInit {
  news! : any;

  constructor(private service : PostService) {}
  ngOnInit(): void {
    this.service.getPopArticls().subscribe((data) => this.news = data);
  }
}
