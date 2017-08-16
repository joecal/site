import { Component } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [ growShrink ]
})
export class WorkComponent {
  orientation:string;
  imgContainerMaxWidth:string;
  cardActionsMaxHeight:string;
  cardActionsMaxWidth:string;
  h1HeaderFontSize:string;
  cardBtnMaxHeight:string;
  cardBtnMaxWidth:string;
  cardImgMaxWidth:string;
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
  getValue(event) {
    this.orientation = event.orientation;
    this.h1HeaderFontSize = event.orientation === "landscape" ? "6vh" : "6vw";
    this.cardMaxHeight = event.orientation === "landscape" ? "16vw" : "16vh";
    this.cardMaxWidth = event.orientation === "landscape" ? "24vw" : "23vh";
    this.cardFontSize = event.orientation === "landscape" ? "4vh" : "4vw";
  }
}
