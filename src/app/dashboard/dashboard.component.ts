import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AppConfig } from 'app/models/app-config';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit,OnInit {

	ngAfterViewInit() { }

	ngOnInit(){
		console.log('BaseURL',AppConfig.Config.BaseURL)
	}

}
