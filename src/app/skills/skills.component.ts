import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  iconContainerFlex:number;
  iconFontSize:number;

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

  ngOnInit() {
    this.onWindowResize();
  }

  @Input('flex') fxFlex:number;

  @HostListener("window:resize", [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.icons = this.icons;
    this.fxFlex = this.fxFlex;

    // this.iconContainerFlex = orientation === "portrait" && height < 1000 ? width:
    //   orientation === "portrait" && height > 1000 ? this.fxFlex :
    //   orientation === "landscape" && width < 1000 ? this.fxFlex * 3 :
    //   orientation === "landscape" && width > 1000 ? this.fxFlex : null;
    this.iconContainerFlex = width;

    console.log("c: ",this.iconContainerFlex)

    this.iconFontSize = orientation === "portrait" && height < 1000 ?
      1.38 : (orientation === "portrait" && height > 1000 ?
      1.5 : orientation === "landscape" && width < 500 ?
      1.6 : orientation === "landscape" && width < 1000 ?
      0.80 : orientation === "landscape" && width > 1000 ?
      1.5 : null);

    console.log("f: ",this.iconFontSize)
  }

}
