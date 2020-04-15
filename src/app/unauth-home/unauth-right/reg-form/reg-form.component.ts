import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  ageOptions: [number];
  constructor() { }

  ngOnInit(): void {
    const ageOps: [number] = [1];
    for (let i = 2; i < 100; i++) {
      ageOps.push(i);
    }
    this.ageOptions = ageOps;
  }

}
