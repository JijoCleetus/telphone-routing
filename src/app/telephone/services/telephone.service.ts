import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class TelephoneService {
    private _jsonURL = 'assets/operators.json';
    operatorData: any;
    constructor(private http: HttpClient) {
    }
    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    getOperators(): any {
        return this.operatorData;
    }

}
