import { Component } from '@angular/core';
import { TemasService } from '../../services/temas.service';
import { Hit } from '../../interfaces/Hit.interface';
import { Paginator } from '../../interfaces/paginator.interface';

@Component({
  selector: 'temas-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  paginator: Paginator = {
    page: 1,
    per_page: 12
  };

  constructor(private temasService: TemasService) { }

  get hits(): Hit[] {
    return this.temasService.hitList;
  }

  get total(): number {
    return this.temasService.totalHits;
  }

}
