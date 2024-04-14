import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoService } from 'src/app/services/info.service';
import { Info } from 'src/app/shared/models/info';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  info!: Info;
  infos: Info[] = [];

  constructor(
    private infoService:InfoService,
    private alertService: AlertService){
    this.infos = infoService.getAll();
  }
  ngOnInit(): void {
    
  }


}
