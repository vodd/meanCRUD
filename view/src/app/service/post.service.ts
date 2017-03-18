import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {

  post:any;
  id:String;

  constructor(private http: Http) { }

  addPost(post){
    let headers = new Headers();
    headers.append('content-Type', 'application/json');    
    return this.http.post('http://localhost:3000/posts/',post, { headers: headers })
      .map(res => res.json()); 
  }

  editPost(post){
    let headers = new Headers();
    headers.append('content-Type', 'application/json');    
    console.log(post.id)
    return this.http.post('http://localhost:3000/posts/edit/'+post.id, post,{ headers: headers })
      .map(res => res.json()); 
  }

  findAll() {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');    
    return this.http.get('http://localhost:3000/posts/', { headers: headers })
      .map(res => res.json());  
  }

  findOne(id) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');    
    return this.http.get('http://localhost:3000/posts/post/'+id, { headers: headers })
      .map(res => res.json());  
  }

  delete(id){
    let headers = new Headers();
    headers.append('content-Type', 'application/json');    
    return this.http.get('http://localhost:3000/posts/delete/'+id, { headers: headers })
      .map(res => res.json());  
  }

}
