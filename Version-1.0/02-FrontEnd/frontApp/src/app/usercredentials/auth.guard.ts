import { ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';

import { CredentialService } from '../service/credential.service';
import { Injectable } from '@angular/core';


// export function authGuard(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot,
//   router: Router ,
//   ): any{

//     const sessionValue = credserv.getData('isLogin');

//   if (sessionValue == 'true') {
//     return true; 
//   } else {
//         return false;
//   }
// }

@Injectable()
export class AuthGuard {

  constructor(private credServ: CredentialService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const sessionValue = this.credServ.getData('isLogin');
    
    if (sessionValue === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not logged in
      return false;
    }
  }
}