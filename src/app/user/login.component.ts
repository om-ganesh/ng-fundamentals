import { Component } from "@angular/core";
@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
 login(loginForm) {
     console.log(loginForm);
 }
}

