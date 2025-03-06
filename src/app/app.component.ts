import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Angular';
  imageUrl = "logo.jpg";
  onClickHref = "https://www.google.com"
  name = ""

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  logoOnClickHandler($event: Event){
    window.open(this.onClickHref, "_blank")
  }
}
