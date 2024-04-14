import { Component, OnInit } from '@angular/core';
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
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    let data = this.localStorageService.getData('user');
    this.is_sys_admin = data.user?.is_sys_admin ?? false;
    this.id = data.user[0]?.id ?? 0;

    this.userService.getAll().subscribe((users: any[]) => {
      this.users = users.filter(user => user.id === this.id);
    });
  }

  onEdit(user: any) { 
    
  }
}
