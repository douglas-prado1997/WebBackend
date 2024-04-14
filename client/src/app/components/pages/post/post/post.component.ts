import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {



  name: string = '';
  description: string = ''
  ingredients: string = ''
  image: string = '';
  value: number = 0;

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }

  onSubmit(): void {
    const postData = {
      name: this.name,
      description: this.description,
      ingredients: this.ingredients,
      image: this.image,
      value: this.value
    };

    this.postService.create(postData).subscribe(
      () => {
        this.router.navigate(['users']);
      },
      (error) => {
        console.error('Erro ao criar post:', error);
      }
    );
  }


  handleFileInput(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
  
        img.onload = () => {
          const DESIRED_SIZE = 200; 
  
          let width = img.width;
          let height = img.height;
  
          if (width > height) {
            height *= DESIRED_SIZE / width;
            width = DESIRED_SIZE;
          } else {
            width *= DESIRED_SIZE / height;
            height = DESIRED_SIZE;
          }
  
          const canvas = document.createElement('canvas');
          canvas.width = DESIRED_SIZE;
          canvas.height = DESIRED_SIZE;
          const ctx = canvas.getContext('2d');
  
          ctx?.drawImage(img, 0, 0, width, height);
  
          const dataUrl = canvas.toDataURL('image/jpeg');
  
          this.image = dataUrl;
        };
      };
      reader.readAsDataURL(file);
    }
  }

  
  
}

