import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  items = [
    { title: 'jflaksdjfalksjdf', content: 'fasdkfjasçlk fas dfkaskasçj' },
    { title: 'a dfa sdf asdf asdf asd fas', content: 'fasdkfsda afasd fasd jasçlk fas dfkaskasçj' },
    { title: 'j fghfg hdfflaksdjfalksjdf', content: 'fasdkfjasçlk fas dfkaskasçj' },
    { title: ' ghdfjgfhjfg hjgh jfg hjf gf jg', content: 'fasdkfjasçlk fas dfkaskasçj' },
    { title: 'hfgh j g2345234523fgh fgh435falksjdf', content: 'fasdkfjasçlk fas 45235234523' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
