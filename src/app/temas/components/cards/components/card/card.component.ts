import { Component, Input } from '@angular/core';
import { Hit } from '../../../../interfaces/Hit.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  public hit: Hit = {} as Hit;
}
