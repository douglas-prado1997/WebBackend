import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorageService';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any[] = [];
  is_sys_admin: boolean = false;
  id: number = 0;

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    let data = this.localStorageService.getData('user');
    let idEdit = this.localStorageService.getData('idEdit');
    this.is_sys_admin = data.user?.is_sys_admin ?? false;
    this.id = idEdit  ?? data.user[0]?.id;
    this.localStorageService.removeData('idEdit')

    this.userService.getAll().subscribe((users: any[]) => {
      this.users = users.filter(user => user.id === this.id);
    });
  }

  onEdit(user: any) { 
    this.userService.update(this.id, this.users[0]).subscribe(
      () => {
        this.router.navigate(['users']);
      },
      (error) => {
        console.error('Erro ao atualizar usuário:', error);
      }
    );
    
    
  }
}
