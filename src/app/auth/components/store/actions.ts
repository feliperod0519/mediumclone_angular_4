import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { registerRequestInterface } from "../../types/registerRequest.interface";
import { currentUserInterface } from "../../types/currentUser.interface";

//export const registerAction = createAction('[Auth] Register', props<{request: registerRequestInterface}>());

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        register: props<{request: registerRequestInterface}>(),
        registerSuccess: props<{currentUser: currentUserInterface}>(),
        registerFailure: emptyProps()
    }
})