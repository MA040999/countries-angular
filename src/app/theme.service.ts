import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  toggleTheme(){
    
    const theme = this.getTheme();
    
    if(theme === 'dark'){

      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light') //for daisyUI
      localStorage['theme'] = 'light'

      return
      
    }

    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark') //for daisyUI
    localStorage['theme'] = 'dark'
    
  }
  
  getTheme(){

    return localStorage['theme']

  }
}
