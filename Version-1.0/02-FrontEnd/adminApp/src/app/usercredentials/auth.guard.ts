import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CredentialService } from '../service/credential.service';

  // export const authGuard: CanActivateFn = (route, state) => {
  //   return true;
  // };
@Injectable()
export class AuthGuard {

  constructor(private credServ: CredentialService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    try{
      const sessionValue = this.credServ.getData('isLogin');
    
      if (sessionValue === 'true') {
        return true;
      } else {
        this.router.navigate(['/login']); // Redirect to login page if not logged in
        return false;
      }
    }
    catch{
      this.router.navigate(['/login']); // Redirect to login page if not logged in
      return false;
    }
    
  }
}