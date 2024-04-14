import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { TECH_URL } from 'src/app/shared/constants/urls';
import { Info } from 'src/app/shared/models/info';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent {
  tecnologias: string[] = [];
  infos: Info[] = [];
  constructor(
    private infoService:InfoService,
    private http: HttpClient
  ){
    this.infos = infoService.getAll();
  }


    ngOnInit() {
      // this.http.get<string[]>('/tecnologias')
      //   .subscribe(
      //     tecnologias => {
      //       this.tecnologias = tecnologias;
      //     },
      //     error => {
      //       console.error('Erro:', error);
      //     }
      //   );
    }

}
