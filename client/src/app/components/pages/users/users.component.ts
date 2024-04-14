import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localStorageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  is_sys_admin: number = 0;
  id: number = 0;


  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    let data = this.localStorageService.getData('user')

      setTimeout(() => {
        this.is_sys_admin = data.user[0].is_sys_admin ?? 0;
        this.id = data.user[0].id ?? 0;
        this.userService.getAll().subscribe((users: any[]) => {
          this.users = users;
      });
    });
  }

  confirmDelete(id: any) {
    this.userService.deleteById(id).subscribe(
      () => {
        this.refreshTaskList();
        alert('Item excluído com sucesso!');
      },
      (error) => {
        console.error('Erro ao excluir item:', error);
      }
    );
  }

  updateUsers(id: any) {
    this.localStorageService.setData('idEdit',id);
    this.router.navigate(['/profile'], { queryParams: { id: id } });
  }

  refreshTaskList() {
    this.userService.getAll().subscribe((users: any[]) => {
      this.users = users;
    });
  }
}
