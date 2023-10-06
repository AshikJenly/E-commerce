import { ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';



export function authGuard(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router 
  ): any{
    
  const sessionValue = sessionStorage.getItem('isLogin');

  if (sessionValue === 'true') {
    return true; 
  } else {
        return false;
  }
}
