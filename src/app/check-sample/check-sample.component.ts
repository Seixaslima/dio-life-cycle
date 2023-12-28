import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  ngOnInit(): void {
    console.log("OnInit");
  }
  ngDoCheck(): void {
    console.log("DoCheck");
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

}
