import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private _router: Router,
    public db: AngularFireDatabase) { }

  ngOnInit() {
    this.items = this.db.list('servicios').valueChanges();
  }

  solicitar(id) {
    this._router.navigate(['/dashboard']);
  }

}
