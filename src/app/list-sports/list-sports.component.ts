import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-sports',
  templateUrl: './list-sports.component.html',
  styleUrls: ['./list-sports.component.css']
})
export class ListSportsComponent implements OnInit {
  news! : any;

  constructor(private service : PostService) {}
  ngOnInit(): void {
    this.service.getSportArticls().subscribe((data) => this.news = data);
  }
}
