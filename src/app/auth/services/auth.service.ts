import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { registerRequestInterface } from "../types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { currentUserInterface } from "../../auth/types/currentUser.interface";
import { authResponseInterface } from "../../auth/types/authResponse.interface";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: registerRequestInterface): Observable<currentUserInterface> {
        const url = environment.apiUrl + '/users';
        return this.http.post<authResponseInterface>(url, data).pipe(map((response: authResponseInterface) => response.user));
    }
}