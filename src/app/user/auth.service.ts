import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;
    loginUser(name: string, password: string) {
      this.currentUser = {
          id: 1,
          firstName: 'om',
          lastName: 'ganesh',
          userName: 'omganesh'
      }
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}
