import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MainLayoutComponent } from './app/components/main-layout/main-layout.component';
import { HeaderFiltersComponent } from "./app/components/filters/filters.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent, HeaderFiltersComponent],
  template: `
    <div class="app-container">
      <header class="header">
        <img src="https://gamuda.com.my/wp-content/uploads/2022/06/logo-header-red.png" alt="Gamuda Logo" class="logo">
        <app-filters></app-filters>
      </header>
      <app-main-layout></app-main-layout>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .logo {
      height: 70px;
      margin-right: 50px;
      margin-bottom: -20px;
      margin-top: -20px;
      margin-left: -20px;
    }
  `]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()]
});