import { createSelector } from '@ngrx/store';
import { Note } from '../../interfaces/note.model';
import { AppState } from '../app.state';

const getNoteState = (state: AppState) => state.notes;
const getNotes = (state: Note[]) => state;

export const getAllNotes = createSelector(getNoteState, getNotes);
