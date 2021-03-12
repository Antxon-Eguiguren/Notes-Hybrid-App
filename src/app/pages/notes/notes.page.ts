import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { getAllNotes } from '../../state/selectors/note.selectors';
import { Note } from '../../interfaces/note.model';
import * as NoteActions from '../../state/actions/note.actions';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes$: Observable<Note[]>;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.notes$ = this.store.select(getAllNotes);
  }

  async onClickAddNote() {
    const alert = await this.alertController.create({
      header: 'Nueva Nota',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'Título...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if (!data.title) {
              return;
            }

            const note = {
              id: Math.random().toString(),
              title: data.title,
              text: ''
            };

            this.store.dispatch(new NoteActions.CreateNote({note}));
          }
        }
      ],
    });

    alert.present();
  }

  onClickNote(note) {
    this.router.navigate(['note-detail'], {state: note});
  }

  onClickDeleteNote(id: string) {
    this.store.dispatch(new NoteActions.DeleteNote({id}));
  }

}
