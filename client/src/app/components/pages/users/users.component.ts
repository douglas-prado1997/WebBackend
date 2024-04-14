import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localStorageService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  is_sys_admin: boolean = false;
  id: number = 0;


  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    let data = this.localStorageService.getData('user')
    this.is_sys_admin = data.user.is_sys_admin ?? false ;
    this.id = data.user.id ?? 0;
    this.userService.getAll().subscribe((tasks: any[]) => {
      this.users = tasks;
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

  refreshTaskList() {
    this.userService.getAll().subscribe((tasks: any[]) => {
      this.users = tasks;
    });
  }
}
