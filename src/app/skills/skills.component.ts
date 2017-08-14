import { Component } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [ growShrink ]
})
export class SkillsComponent {
  h1HeaderFontSize:string;
  iconContainerPad:string;
  iconFontSize:string;

  icons:any = [
    "devicon-angularjs-plain-wordmark",
    "devicon-android-plain-wordmark",
    "devicon-amazonwebservices-plain-wordmark",
    "devicon-apple-original",
    "devicon-atom-original-wordmark",
    "devicon-bitbucket-plain-wordmark",
    "devicon-bootstrap-plain-wordmark",
    "devicon-chrome-plain-wordmark",
    "devicon-confluence-plain-wordmark",
    "devicon-css3-plain-wordmark",
    "devicon-express-original-wordmark",
    "devicon-firefox-plain-wordmark",
    "devicon-git-plain-wordmark",
    "devicon-github-plain-wordmark",
    "devicon-google-plain-wordmark",
    "devicon-heroku-original-wordmark",
    "devicon-html5-plain-wordmark",
    "devicon-javascript-plain",
    "devicon-jquery-plain-wordmark",
    "devicon-less-plain-wordmark",
    "devicon-linux-plain",
    "devicon-mongodb-plain-wordmark",
    "devicon-nodejs-plain-wordmark",
    "devicon-photoshop-line",
    "devicon-php-plain",
    "devicon-postgresql-plain-wordmark",
    "devicon-python-plain-wordmark",
    "devicon-rails-plain-wordmark",
    "devicon-react-original-wordmark",
    "devicon-ruby-plain-wordmark",
    "devicon-sass-original",
    "devicon-slack-plain-wordmark",
    "devicon-ssh-plain-wordmark",
    "devicon-typescript-plain",
    "devicon-ubuntu-plain-wordmark"
  ];

  getValue(event) {
    this.h1HeaderFontSize = event.h1HeaderFontSize;
    this.iconContainerPad = event.iconContainerPad;
    this.iconFontSize = event.iconFontSize;
  }
}
