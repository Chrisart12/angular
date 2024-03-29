import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styles: []
})
export class AppareilComponent implements OnInit {
	
	@Input() appareilName: string;
	@Input() appareilStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
  	return this.appareilStatus;
  }

}
