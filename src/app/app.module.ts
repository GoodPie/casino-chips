import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import { GameComponent } from './components/game/game.component';
import {RouterModule, Routes} from '@angular/router';
import { GamePlayerComponent } from './components/game-player/game-player.component';
import { PlayerComponent } from './components/player/player.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { GameListComponent } from './components/game-list/game-list.component';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes: Routes = [
  { path: 'logout', component: LogoutComponent},
  { path: 'play', component: PlayerComponent },
  { path: 'game', component: GameComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GameComponent,
    GamePlayerComponent,
    PlayerComponent,
    GameListComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
