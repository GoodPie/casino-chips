import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLobbyFoundComponent } from './no-lobby-found.component';

describe('NoLobbyFoundComponent', () => {
  let component: NoLobbyFoundComponent;
  let fixture: ComponentFixture<NoLobbyFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLobbyFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLobbyFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
