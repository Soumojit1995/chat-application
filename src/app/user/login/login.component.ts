import { Component, OnInit } from '@angular/core';


import { AppService } from '../../app.service';
import { Router } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;

  constructor(public appService: AppService, public router: Router, public toastr: ToastrService, public cookie: CookieService) {
    console.log('login component called');
  }

  ngOnInit() {
  }



  public goToSignUp: any = () => {
    this.router.navigate(['/sign-up']);
  } // end to sign-up

  public signinFunction: any = () => {
    if (!this.email) {
      this.toastr.warning('enter email');
    } else if (!this.password) {

      this.toastr.warning('enter password');
    } else {

      const data = {
        email: this.email,
        password: this.password
      };

      this.appService.signinFunction(data).subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          console.log(apiResponse);
          this.cookie.set('authtoken', apiResponse.data.authToken);
          this.cookie.set('receiverId', apiResponse.data.userDetails.userId);
          this.cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
          this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
          this.router.navigate(['/chat']);
          this.toastr.success(apiResponse.message);

        } else {
          this.toastr.error(apiResponse.message);
        }
      },
        (err) => {
          this.toastr.error('some error occured');
        });

    }
  }
}
