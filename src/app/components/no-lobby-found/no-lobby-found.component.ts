import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-lobby-found',
  templateUrl: './no-lobby-found.component.html',
  styleUrls: ['./no-lobby-found.component.scss']
})
export class NoLobbyFoundComponent {

  constructor(public dialogRef: MatDialogRef<NoLobbyFoundComponent>,
              @Inject(MAT_DIALOG_DATA) public data: NoLobbyModel, private router: Router) {
  }

  onNoLobbyConfirm() {
    this.router.navigate(['']);
    this.dialogRef.close();
  }
}

export interface NoLobbyModel {
  lobbyId: string;
}
