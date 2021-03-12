import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Note } from '../../interfaces/note.model';
import * as NoteActions from '../../state/actions/note.actions';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  note: Note;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.note = history.state;
  }

  onClickDeleteNote(id: string) {
    this.store.dispatch(new NoteActions.DeleteNote({id}));
    this.router.navigate(['/']);
  }

  onInputEditNote(note: Note, event) {
    this.store.dispatch(new NoteActions.EditNote({note, text: event.target.innerHTML}));
  }

}
