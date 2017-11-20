import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ServicefirebaseService {

  apiRoot = 'https://servicioya-d43c7.firebaseio.com/servicios';
  results: any;

  constructor(private http: HttpClient,
    public _db: AngularFireDatabase,
    public _routes: Router) { }

  getService(id): any {
    const url = `${this.apiRoot}/${id}.json`;
    this.http.get(url).subscribe(data => {
      this.results = data;
    });
  }

  saveData(data: Object) {
    console.log();
    const itemsRef = this._db.list('customers');
    itemsRef.push(data);
    this._routes.navigate(['/farewell']);


  }

}
