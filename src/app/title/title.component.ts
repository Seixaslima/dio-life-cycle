import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''
  constructor () {
    console.log(`constructor ${this.nome}`)
  }
  ngOnChanges(): void {
    console.log(`Onchange ${this.nome}`)
  }

  ngOnInit(): void {
    this.nome += " X "
    console.log(`OnInit ${this.nome}`)

  }

}
