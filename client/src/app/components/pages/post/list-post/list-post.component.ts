import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Buffer } from 'buffer';
import { LocalStorageService } from 'src/app/services/localStorageService';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {

  posts: any[] = [];
  user:any

  constructor(
    private postService: PostService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  


  ngOnInit(): void {
    this.user = this.localStorageService.getData('user');
    this.postService.getAll().subscribe((posts: any[]) => {
      this.posts = posts;
    });
  }

  curtirPost(post: any) {
    const data = {
      id_post: post.id,
      id_user:this.user.user[0]?.id
    }
    this.postService.likePost(data).subscribe(
      () => {
        this.refreshOostList();
        this.router.navigate(['list-post']);
      },
      (error) => {
        console.error('Erro ao criar post:', error);
      }
    );

  }

  comentarPost(post: any) {

    console.log('Comentário no post:', post);
  }

  toggleCommentForm(post: any) {
    post.showCommentForm = !post.showCommentForm;
    post.novoComentario = '';
  }

  adicionarComentario(post: any) {
    if (post.novoComentario.trim() !== '') {
      if (!post.comentarios) {
        post.comentarios = [];
      }
      post.comentarios.push(post.novoComentario);
      post.novoComentario = '';
      post.showCommentForm = false;
    }
  }

  refreshOostList() {
    this.postService.getAll().subscribe((users: any[]) => {
      this.posts = users;
    });
  }

}
