import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {
  id: any;
  post: Object;

  constructor(private router: Router, private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    

    this.postService.findOne(this.id).subscribe(data => {
      this.post = [data.post]
      console.log(this.post)
    })
  }

  onRemovePost() {
    this.postService.delete(this.id).subscribe(data => {
      if (data.success) {
        this.router.navigate(['']);
      } else {
        console.log('err')
      }
    })
  }

}
