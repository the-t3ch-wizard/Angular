import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Angular';
  imageUrl = "logo.jpg";
  onClickHref = "https://www.google.com"

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  logoOnClickHandler($event: Event){
    // console.log("clicked", $event);
    window.open(this.onClickHref, "_blank")
  }
}
