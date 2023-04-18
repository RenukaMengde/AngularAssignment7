import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public str = 'Marvellous Infosystem!';

  public Display()
  {
    this.str = "Educating For Better Tommorow!!";
    return this.str;
  }
}
