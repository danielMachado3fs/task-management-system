import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() size?: string = '2rem';
  @Input() subtitulo?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
