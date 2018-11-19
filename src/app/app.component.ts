import { Component } from '@angular/core';
import { Printer } from './app.printer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Printer]
})
export class AppComponent {
constructor()
{
  var p=new Printer();
  p.print('sdgdf');
}

  title = 'Ponseelan';
  typeProperty='button';
  Fruitcollections:any[]=[
  {'name':'ponseelan'},
  {'name':'ravi'},
{'name':'raja'}
]
}
