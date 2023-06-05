import { Component, Input } from '@angular/core';
import { Hit } from '../../interfaces/Hit.interface';
import { TemasService } from '../../services/temas.service';
import { Paginator } from '../../interfaces/paginator.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  
  constructor(public temasServices: TemasService) { }
  
  @Input()
  public hits: Hit[] = [];

  @Input()
  public total: number = 0;

  @Input()
  public paginator: Paginator = {} as Paginator;

  pageEvent: PageEvent = {} as PageEvent;

  get searchInput(): string {
    return this.temasServices.searchInput;
  }

  get pageIndex(): number {
    return this.temasServices.pageIndex;
  }
  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.setPageIndex = e.pageIndex;

    const tag = this.searchInput;
    
    const page = e.pageIndex + 1;
    const per_page = this.paginator.per_page;
    
    this.temasServices.searchTag(tag, page, per_page);
  }

  set setPageIndex(value: number) {
    this.temasServices.pageIndex = value;
  }

}
