import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SharedService} from '../../app/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  loading: boolean = false;
  data: any = {};
  constructor(private services: SharedService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.params['value'].id
    const type = this.activatedRoute.params['value'].type;
    this.getData({type: type, offset: 0, limit: 10, id}); 
  }

  getData(params: Object): void {
    this.loading = true;
    this.services.getDataApi(params).subscribe((result) => {
      const {data} = result;
      this.loading = false;
      this.data = data.results[0];
    },
    (error) => {      
      this.data = {};
      this.loading = false;
    });
  }

  getTitleCard(): string {
    return (this.data.type === "story" && this.data.originalIssue && this.data.originalIssue.name) || this.data.name || this.data.title || this.data.fullName;
  }

  getDescription(): string {
    return this.data.description || (this.data.type === "story" && this.data.title) || 'Not description.';
  }

  getImageCard() :string {
    return this.data.thumbnail && `${this.data.thumbnail.path}.${this.data.thumbnail.extension}`;
  }

  handlerClickClearSearch(): void {
    const id = this.activatedRoute.params['value'].id
    const type = this.activatedRoute.params['value'].type;
    this.getData({type: type, offset: 0, limit: 10, id});
  }

  handlerKeyPressClearSearch(e: Event): void {
    if(e['keyCode'] === 13 && !this.loading) {
      this.handlerClickClearSearch();
    }
  }

  handlerClick(item: any): void  {
    let params = item.resourceURI.split('/public');
    // push(`${window.location.origin}/details${params[1]}`);
    window.location.href = `/details${params[1]}`;
  }

}
