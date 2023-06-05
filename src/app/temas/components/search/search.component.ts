import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { TemasService } from '../../services/temas.service';
import { Paginator } from '../../interfaces/paginator.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @ViewChild('tagInput',{ static: false })
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private temasServices: TemasService) { }

  @Input()
  public paginator: Paginator = {} as Paginator;

  search(){
    const tag = this.tagInput.nativeElement.value;
    this.setSearchInput = tag;
    this.setPageIndex = 0;
    const page = this.paginator.page;
    const per_page = this.paginator.per_page;
    
    this.temasServices.searchTag(tag, page, per_page);
  }

  set setSearchInput(value: string) {
    this.temasServices.searchInput = value;
  }

  set setPageIndex(value: number) {
    this.temasServices.pageIndex = value;
  }

}
