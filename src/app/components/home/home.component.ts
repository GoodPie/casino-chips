import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/core/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public providers: AuthProvider;

  constructor(public afAuth: AuthService) { }

  ngOnInit() {
  }

}
