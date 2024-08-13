import { createEffect, Actions, ofType, act } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";

import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { currentUserInterface } from "../../types/currentUser.interface";
import { inject, Injectable } from "@angular/core";

import { authActions } from "./actions";

@Injectable()
export class AuthEffects
{
    constructor(private actions$: Actions, private authService: AuthService) {}

    registerEffect = createEffect(()=>
    {
        return this.actions$.pipe
        (
            ofType(authActions.register),
            switchMap(({request})=>
            {
                return this.authService.register(request).pipe
                (
                    map((currentUser: currentUserInterface)=>
                    {
                        return authActions.registerSuccess({currentUser});
                    })
                )
            }),
            catchError(()=>
            {
                return of(authActions.registerFailure());
            })
                
        );                            

    },{functional: true}); 
}

// export const registerEffect = createEffect((actions$=inject(Actions),authService=inject(AuthService)) =>
//     {
//         actions$.pipe
//         (
//             ofType(authActions.register),
//             switchMap(({request})=>
//             {
//                 return authService.register(request).pipe
//                 (
//                     map((currentUser: currentUserInterface)=>
//                     {
//                         return authActions.registerSuccess({currentUser});
//                     })
//                 )
//             }),
//             catchError(()=>
//             {
//                 return of(authActions.registerFailure());
//             })
                
//         );                            
//     },{functional: true});