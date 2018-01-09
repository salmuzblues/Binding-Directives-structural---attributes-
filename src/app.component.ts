import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  template: `
	  <div>
	    <h1>{{message}}</h1> 
	    <input type="text" [(ngModel)]="message"/>
	  </div>
    
    <h2> ngStyle </h2>
    <!-- Template ngStyle  -->
    <h4> Ussing Method</h4>
    <p [ngStyle]="getInlineStyle(message)">{{message}}</p>
    <!-- this just one style  -->
    <h4>Using Direct</h4>
    <p [style.font-family]="message.length > 15 ? 'times' : 'Arial'">{{message}} </p> <br>
    <h2>ngClases</h2>
    <h4>Ussing Method</h4>
    <p [ngClass]="getClasses(message)">{{message}}</p><br>
    <h4>Ussing direct</h4>
    <p [class.red]="isThisRed">{{message}} </p>
    
  `
})
export class AppComponent {
  public message: string = 'Angular – two way  Binding Syntax';
  public isThisRed: boolean= true;
  // create a getter for ngStyle

  getInlineStyle(message)
  {
    // var
    let styleMessage = {
      'color' : message.length > 6 ? 'red' : 'green',
      'text-decoration' : message.length > 6 ? 'underline' : 'none'
    };
    return styleMessage;
  }
  // create ngClass

  getClasses (message) {
    // var
    let  classes = {
      red: message.length > 8 ,
      bolder: message.length > 15
    };
    return classes;
    }

}
