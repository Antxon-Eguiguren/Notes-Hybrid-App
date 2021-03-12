import { Action } from '@ngrx/store';
import { Note } from '../../interfaces/note.model';

export const CREATE_NOTE = '[Notes] Create Note';
export const DELETE_NOTE = '[Notes] Delete Note';
export const EDIT_NOTE = '[Notes] Edit Note';

export class CreateNote implements Action {
    readonly type = CREATE_NOTE;
    constructor(public payload: {note: Note}) {}
}

export class DeleteNote implements Action {
    readonly type = DELETE_NOTE;
    constructor(public payload: {id: string}) {}
}

export class EditNote implements Action {
    readonly type = EDIT_NOTE;
    constructor(public payload: {note: Note, text: string}) {}
}

export type Actions = CreateNote | DeleteNote | EditNote;
