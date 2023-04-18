import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Title = 'Marvellous Infosystem!!';

  public fun()
  {
    return this.Title;
    // return 'Marvellous Infosystem!!'; another way
  }
}
