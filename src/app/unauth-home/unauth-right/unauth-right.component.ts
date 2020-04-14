import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauth-right',
  templateUrl: './unauth-right.component.html',
  styleUrls: ['./unauth-right.component.css']
})
export class UnauthRightComponent implements OnInit {
  ageOptions: [number];
  constructor() { }

  ngOnInit() {
    const ageOptions: [number] = [1];
    console.log(this.ageOptions);
    for (let i = 2; i < 100; i++)  {
      ageOptions.push(i);
    }
    this.ageOptions = ageOptions;
  }

}
