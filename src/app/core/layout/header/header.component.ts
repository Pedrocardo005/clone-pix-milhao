import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isMobile = false;

  ngOnInit() {
    if (window.screen.width < 400) {
      this.isMobile = true;
    }
  }
}
