import { RouterModule, Router } from '@angular/router';
import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Object;

  constructor(private post: PostService, private router: Router) { }

  ngOnInit() {
    this.post.findAll().subscribe(data => {
      this.posts = data.posts      
    },
      err => {
        console.log(err);
        return false
      }
    )
  }

}
