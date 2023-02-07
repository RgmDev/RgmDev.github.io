import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    particlesJS.load('particles-js', '../../../assets/particles/particles.json', null);
    const options = {
      strings: ['Be code my friend...'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };

    const typed = new Typed('#typed-text', options);
  }

}
