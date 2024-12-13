import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: '<app-home></app-home>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
