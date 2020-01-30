import { Component, OnInit } from '@angular/core';
import { MatFormField, MatInput } from '@angular/material';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isRegistering = false;

  constructor(private afAuth: AuthService) { }

  ngOnInit() {
  }

  public toggleAuthForm() {
    this.isRegistering = !this.isRegistering;
  }

  public signInWithGoogle() {
    this.afAuth.signInWithGoogle();
  }

}
