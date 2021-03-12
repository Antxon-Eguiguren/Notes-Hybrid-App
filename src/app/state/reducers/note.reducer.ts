import { Note } from '../../interfaces/note.model';
import * as NoteActions from '../actions/note.actions';

const initialState: Note[] = [];

export function reducer(state: Note[] = initialState, action: NoteActions.Actions ) {
    switch (action.type) {
        case NoteActions.CREATE_NOTE:
            return [action.payload.note, ...state];

        case NoteActions.DELETE_NOTE:
            state = [...state];
            state.splice(state.findIndex(item => item.id === action.payload.id), 1);
            return state;

        case NoteActions.EDIT_NOTE:
            const note = {
                id: action.payload.note.id.toString(),
                title: action.payload.note.title,
                text: action.payload.text
            };

            const index = state.findIndex(item => item.id === action.payload.note.id);

            if (index !== -1) {
                state = [...state];
                state.splice(index, 1);
                state.unshift(note);
            }
            return state;

        default:
            return state;
    }
}
