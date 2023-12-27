import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {

  nome: string = 'Lucas'
  constructor () {
    console.log("Sou o constructor")
  }

  ngOnInit(): void {
    this.nome = `Olá ${this.nome}`
    console.log("Sou o OnInit")

  }

}
