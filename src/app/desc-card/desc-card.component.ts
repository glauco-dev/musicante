import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-desc-card',
  templateUrl: './desc-card.component.html',
  styleUrls: ['./desc-card.component.sass']
})
export class DescCardComponent {
  @ContentChild('title') title!: TemplateRef<any>;
  @ContentChild('cover') cover!: TemplateRef<any>;
  @ContentChild('desc') desc!: TemplateRef<any>;
}
