import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicefirebaseService } from '../../services/servicefirebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  parametro: any;
  image = false;
  service: any;

  user: Object = {
    name: '',
    identification_card: '',
    phone_number: '',
    email: '',
    address: ''
  };

  constructor(public activatedRoute: ActivatedRoute,
    public _sfs: ServicefirebaseService) {

    this.activatedRoute.params
      .map(parametros => parametros['id'])
      .subscribe(id => {
        this.parametro = id;

      });
  }

  ngOnInit() {
    this._sfs.getService(this.parametro);
    setTimeout(() => {
      this.image = true;
    }, 1000);
  }

  save(forma) {
    console.log('Valor', forma.value);
    this._sfs.saveData(forma.value);

  }

}
