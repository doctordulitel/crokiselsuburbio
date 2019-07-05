import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscriber } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  titulo: string;
 

  constructor(private router: Router, 
              private title: Title,
              private meta: Meta) { 
      
    this.getDataRoute()
    .subscribe( data=>{
        console.log(data);
        this.titulo = data.titulo;
        this.title.setTitle(this.titulo);
              });


        this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' });
        this.meta.addTag({ name: 'author', content: 'dulitel' });
        this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' });


      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.titulo
      };
      this.meta.updateTag(metaTag);
  }

  ngOnInit() {
  }

  getDataRoute(){
    return this.router.events.pipe(

      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data )
    );
  }

}
