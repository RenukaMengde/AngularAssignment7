import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public str = 'Marvellous Infosystem';

  public UpperText()
  {
    this.str = this.str.toUpperCase();
    return this.str;
  }

  public LowerText()
  {
    this.str = this.str.toLowerCase();
    return this.str;
  }
}
