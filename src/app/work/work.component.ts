import { Component, OnInit, HostListener } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';
import { greyscale } from '../shared/greyscale';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [ growShrink, greyscale ]
})
export class WorkComponent {
  h1HeaderFontSize:string;
  cardMaxHeight:string;
  cardMaxWidth:string;
  cardFontSize:string;

  cards:any = [
    { title: "This Site", img: "../../assets/site.png",
      description: "This site is an app that features a portfolio of my some of my work. Programmed with Angulr 4, Angular Material, Node and Express.",
      live: "https://joecal.herokuapp.com", repo: "https://github.com/joecal/site" },
    { title: "JamSwap", img: "../../assets/jamSwap.png",
      description: "JamSwap is an app that allows users to post web development jobs and meetups in the DMV area. Collaboratively programmed with Ruby on Rails, Angular, HTML and Bootstrap CSS.",
      live: "https://jamswap.herokuapp.com", repo: "https://github.com/joecal/jam-swap" },
    { title: "Slips 2.0", img: "../../assets/slips2.png",
      description: "Slips 2.0 is a question and answer app that features quiz questions related to General Assembly's curriculum programmed with Ruby on Rails, HTML and Bootstrap CSS.",
      live: "https://slips2.herokuapp.com", repo: "https://github.com/joecal" },
    { title: "MEAN-Lab", img: "../../assets/meanLab.png",
      description: "MEAN-Lap is a canvas drawing app which allows multiple users to simultaneously draw on a collaborative canvas. Programmed with Angular, Node, Express and p5.js.",
      live: "https://jc-mean-lab.herokuapp.com", repo: "https://github.com/joecal/mean-lab" },
    { title: "Memory", img: "../../assets/memory.png",
      description: "Memory is card game in which all of the cards are laid face down and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards. Programmed with jQuery, HTML and CSS.",
      live: "http://joecal.github.io/joecal.github.io-memory", repo: "https://github.com/joecal/joecal.github.io-memory" },
    { title: "GA Bot", img: "../../assets/gabot.png",
      description: "GA Bot is an app that keeps a GA student's profile on the profile listings front page for better employer visibility. Programmed with Node, Express and simple-headless-chrome.",
      repo: "https://github.com/joecal/gabot" }
  ];

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.h1HeaderFontSize = orientation === "landscape" ? "6vh" : "6vw";
    this.cardMaxHeight = orientation === "landscape" ? "16vw" : "20vh";
    this.cardMaxWidth = orientation === "landscape" ? "24vw" : "23vh";
    this.cardFontSize = orientation === "landscape" ? "4vh" : "4vw";
  }
}
