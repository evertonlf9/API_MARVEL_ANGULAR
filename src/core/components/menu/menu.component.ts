import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() hide: boolean = true;
  currentPage: string = '/';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPage = this.router.routerState.snapshot.url;
  }

  handlerKeyPressNextPage(e:Event, page: string) {
    if(e['keyCode'] === 13) {
      this.handlerClickNextPage(page);
    }
  }

  handlerClickNextPage(page):void {
    if(this.hide)
      this.router.navigate([page]);
  }

}
