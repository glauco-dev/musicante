import { Component, ContentChild,  HostBinding,  HostListener,  OnInit,  TemplateRef, } from '@angular/core';


@Component({
  selector: 'app-archv',
  templateUrl: './archv.component.html',
  styleUrls: ['./archv.component.sass'],
})

export class ArchvComponent implements OnInit{
  @ContentChild('title') title!: TemplateRef<any>;
  @ContentChild('cover') cover!: TemplateRef<any>;
  @ContentChild('desc') desc!: TemplateRef<any>;


  constructor(){
  }

  @HostBinding('class.active') ex:boolean = false;

  @HostListener('click')
  onClick(){
    // this.ex = !this.ex
    if(this.ex)
       {
        var url = location.href;               //Save down the URL without hash.
        location.href = "#edicoes";                 //Go to the target element.
        history.replaceState(null,'',url); 
       }
  }
  ngOnInit(): void {}
}
