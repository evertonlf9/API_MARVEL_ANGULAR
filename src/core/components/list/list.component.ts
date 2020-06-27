import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {SharedService} from '../../../app/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() type: string;

  loading: boolean;
  data: any;
  total:number;
  currenPage:number = 1;
  paginate: any;
  name: string;
  constructor(private services: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getData({type: this.type, offset: 0, limit: 10, name: ''}); 
  }

  getData(params: Object): void {
    this.paginate = params;
    this.loading = true;
    this.services.getDataApi(params).subscribe((result) => {
      const {data} = result;
      this.loading = false;
      this.data = data.results;
      this.total = data.total;
    },
    (error) => {      
      this.data = [];
      this.loading = false;
    });
  }

  getTitleCard(item: any): string {
    return (item.type === "story" && item.originalIssue && item.originalIssue.name) || item.name || item.title || item.fullName;
  }

  getDescription(item: any): string {
    return item.description || (item.type === "story" && item.title) || 'Not description.';
  }

  getImageCard(item: any) :string {
    return `${item.thumbnail.path}.${item.thumbnail.extension}`;
  }

  handleChangePagination(offset: number): void {
    offset = offset - 1;
    this.getData({ ...this.paginate, offset });       
  }

  handleChangeSize(limit: number): void {
    this.getData({ ...this.paginate, limit, offset: 0 });        
  }

  handlerClickClearSearch(): void {
    this.name = "";
    this.getData({
        ...this.paginate,
        limit: 10,
        offset: 0,
        name: ''
    });
  }

  handlerKeyPressClearSearch(e: Event): void {
    if(e['keyCode'] === 13 && !this.loading) {
      this.handlerClickClearSearch();
    }
  }

  handlerClickSearch(): void {
    this.getData({ ...this.paginate, name: this.name });
  }

  handlerKeyPressSearch(e: Event): void {
    if(e['keyCode'] === 13 && !this.loading) {
      this.handlerClickSearch();
    }
  }

  handlerKeyPress(e: Event): void {
    if(e['keyCode'] === 13 && !this.loading) {
      this.handlerClickSearch();
    }
  }

  handlerKeyPressMore(item: Object, e:Event): void {
    if(e['keyCode'] === 13 && !this.loading) {
      this.handlerClickMore(item);
    }
}

  handlerClickMore(item: any): void {
    this.router.navigate([`/details/${this.paginate.type}/${item.id}`]);
  }

}
