import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { AppConfig } from './models/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient,){
    this.GetConfig().subscribe((config:string)=>{
      AppConfig.Config=JSON.parse(config);
    })
  }

  private GetConfig(): Observable<string> {
    const jsonFile = `assets/config/config.json`;
    return this.httpClient.get(jsonFile, { responseType: "text" });
  }
}
