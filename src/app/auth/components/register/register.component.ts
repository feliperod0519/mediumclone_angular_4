import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { registerRequestInterface } from "../../types/registerRequest.interface";
import { Store } from "@ngrx/store";
import { RouterLink } from "@angular/router";
import { selectIsSubmitting } from '../../components/store/reducers';
import { CommonModule } from "@angular/common";
import { authStateInterface } from "../../types/authState.interface";
import { authActions } from "../store/actions";

@Component({
  selector: "mc-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule]
})
export class RegisterComponent {

    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
    });

    isSubmitting$ = this.store.select(selectIsSubmitting);
    
    constructor(private fb:FormBuilder, private store:Store<{auth:authStateInterface}>) {}

    onSubmit(){
        console.log('Form Submitted', this.form.getRawValue());
        const request: registerRequestInterface = { user: this.form.getRawValue() };
        this.store.dispatch(authActions.register({request}))  //{ type: '[Auth] Register', request });
    }

}