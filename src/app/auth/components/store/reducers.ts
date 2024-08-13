import { authActions  } from "./actions";
import { createFeature, createReducer, on } from "@ngrx/store";
import { authStateInterface } from "../../types/authState.interface";

const initialState: authStateInterface = { isSubmitting: false };

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(initialState,
                           on( authActions.register, (state) => ({ ...state, isSubmitting: true })))
    });

export const { name: keyAuth, 
               reducer: authReducer,
               selectIsSubmitting } = authFeature;
