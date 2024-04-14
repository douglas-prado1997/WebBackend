import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {

  posts: any[] = [];

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }


  ngOnInit(): void {
        this.postService.getAll().subscribe((posts: any[]) => {
          this.posts = posts;
          debugger
    });
  }

  
}
