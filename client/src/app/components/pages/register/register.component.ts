import { Component, OnInit} from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { AlertService } from 'src/app/services/alert.service';
import { RequestResister } from 'src/app/shared/models/RequestRegister';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  requestRegister!: RequestResister;

  constructor(
    private registerService: RegisterService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
    this.requestRegister = new RequestResister();
  }


  onRegister() : void {
    this.registerService.goRegister(this.requestRegister).subscribe(data => {
      this.alertService.sucess("Registro eventuado com sucesso!");
      this.router.navigate(['users']);
    },
    error => {
      debugger
      this.alertService.error(error.error.message);
    });
  }
}


