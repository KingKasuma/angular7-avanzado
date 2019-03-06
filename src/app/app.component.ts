import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'Curso de angular 7 avanzado';

  ngDoCheck(){
    console.log('El DoCheck se ha ejecutado');
  }

}
