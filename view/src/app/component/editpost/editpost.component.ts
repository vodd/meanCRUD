import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  id: String;
  title:String;
  des:String;
  category:String;

  constructor(private router: Router, private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = params['id'];  
      console.log(this.id)    
    })

    this.postService.findOne(this.id).subscribe(data => {      
      this.title = data.post.title
      this.des = data.post.des
      this.category = data.post.category      
    })
  }
  onPostSubmit() {
    const post = {
      id: this.id,
      title: this.title,
      des: this.des,
      category: this.category,
    }
    console.log(this.id)

    this.postService.editPost(post).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/onepost',this.id]);
      }else{
        console.log('err');        
      }
    })
  }

}
