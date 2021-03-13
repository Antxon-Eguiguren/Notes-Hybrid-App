import { Note } from '../interfaces/note.model';
export interface AppState {
    readonly notesStore: Note[];
}
