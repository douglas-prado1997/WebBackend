import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { ABOUT_URL } from 'src/app/shared/constants/urls';
import { Info } from 'src/app/shared/models/info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  sobre!: string;
  info_about!: string;
  infos: Info[] = [];
  constructor(
    private infoService:InfoService,
    private http: HttpClient){
    
    this.infos = infoService.getAll();
  }

  ngOnInit(): void {

  }




}



