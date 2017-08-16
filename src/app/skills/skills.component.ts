import { Component } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [ growShrink ]
})
export class SkillsComponent {
  orientation:string;
  h1HeaderFontSize:string;
  iconContainerPad:string;
  iconFontSize:string;

  icons:any = [
    "devicon-angularjs-plain-wordmark colored colored",
    "devicon-android-plain-wordmark colored",
    "devicon-amazonwebservices-plain-wordmark colored",
    "devicon-apple-original colored",
    "devicon-atom-original-wordmark colored",
    "devicon-bitbucket-plain-wordmark colored",
    "devicon-bootstrap-plain-wordmark colored",
    "devicon-chrome-plain-wordmark colored",
    "devicon-confluence-plain-wordmark colored",
    "devicon-css3-plain-wordmark colored",
    "devicon-express-original-wordmark colored",
    "devicon-firefox-plain-wordmark colored",
    "devicon-git-plain-wordmark colored",
    "devicon-github-plain-wordmark colored",
    "devicon-google-plain-wordmark colored",
    "devicon-heroku-original-wordmark colored",
    "devicon-html5-plain-wordmark colored",
    "devicon-javascript-plain colored",
    "devicon-jquery-plain-wordmark colored",
    "devicon-less-plain-wordmark colored",
    "devicon-linux-plain colored",
    "devicon-mongodb-plain-wordmark colored",
    "devicon-nodejs-plain-wordmark colored",
    "devicon-photoshop-line colored",
    "devicon-php-plain colored",
    "devicon-postgresql-plain-wordmark colored",
    "devicon-python-plain-wordmark colored",
    "devicon-rails-plain-wordmark colored",
    "devicon-react-original-wordmark colored",
    "devicon-ruby-plain-wordmark colored",
    "devicon-sass-original colored",
    "devicon-slack-plain-wordmark colored",
    "devicon-ssh-plain-wordmark colored",
    "devicon-typescript-plain colored",
    "devicon-ubuntu-plain-wordmark colored"
  ];

  getValue(event) {
    this.orientation = event.orientation;
    this.h1HeaderFontSize = event.orientation === "landscape" ? "6vh" : "6vw";
    this.iconContainerPad = event.orientation === "landscape" ? "3em" : "4em";
    this.iconFontSize = event.orientation === "landscape" ? "11vh" : "11vw";
  }
}
