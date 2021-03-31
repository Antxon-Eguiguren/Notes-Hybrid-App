import { createSelector } from '@ngrx/store';
import { Note } from '../../interfaces/note.model';
import { AppState } from '../app.state';

const getNotesStore = (notesState: AppState) => notesState.notesStore;
const getNotes = (state: Note[]) => state;
const getNote = (state: Note[], id: string) => state.find(note => note.id === id);

export const getAllNotes = createSelector(getNotesStore, getNotes);
export const getNoteById = createSelector(getNotesStore, getNote);
