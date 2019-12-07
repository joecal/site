import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  HostListener
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from "@angular/forms";
import { growShrink } from "src/shared/grow.shrink";
import { greyscale } from "src/shared/greyscale";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  animations: [growShrink, greyscale]
})
export class ContactComponent implements OnInit {
  h1HeaderFontSize: string;
  msgStatus: string;
  cardFontSize: string;
  loading: boolean;

  contactForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    email: [
      "",
      [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]
    ],
    message: ["", [Validators.required]]
  });

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation = width > height ? "landscape" : "portrait";

      this.h1HeaderFontSize = orientation === "landscape" ? "6vh" : "6vw";
      this.cardFontSize = orientation === "landscape" ? "4vh" : "4vw";
    }
  }

  submit(form: FormGroup, formDirective: FormGroupDirective) {
    if (form.valid) {
      this.loading = true;
      this.http
        .post("https://joecal.dev/api/mail", form.value)
        .pipe(catchError(this.handleError()))
        .subscribe((data: any) => {
          this.loading = false;
          if (data.json().success) {
            this.msgStatus = data.json().success;
            this.snackBar.open("Message Sent!", "Close", {
              duration: 2000
            });
          } else if (data.json().error) {
            this.msgStatus = data.json().error;
            this.clearMsgStatus();
          } else {
            this.msgStatus = "Oops, something broke!";
            this.clearMsgStatus();
          }
        });
      formDirective.resetForm();
      form.reset();
    }
  }

  private handleError<T>() {
    return (error: any): Observable<T> => {
      this.msgStatus = error.message;
      this.clearMsgStatus();
      if (this.loading) {
        this.loading = false;
      }
      return throwError(error);
    };
  }

  private clearMsgStatus() {
    setTimeout(() => {
      this.msgStatus = null;
    }, 5000);
  }
}
