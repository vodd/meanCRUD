import { Router } from '@angular/router';
import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  title: String;
  des: String;
  category: String;

  constructor(private router: Router, private post: PostService) { }

  ngOnInit() {
  }

  onPostSubmit() {
    const post = {
      title: this.title,
      des: this.des,
      category: this.category,
    }

    this.post.addPost(post).subscribe(data => {
      if (data.success) {
        this.router.navigate(['']);
      }else{
        console.log('err');        
      }
    })
  }

}
