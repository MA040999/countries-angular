import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly themeService: ThemeService) { }

  isDarkTheme = this.themeService.getTheme() === 'dark' ? true : false;

  ngOnInit(): void {

  }

  toggleTheme() {

    this.themeService.toggleTheme()

    this.isDarkTheme = !this.isDarkTheme;

  }

}
