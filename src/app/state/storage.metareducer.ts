import {ActionReducer, Action} from '@ngrx/store';
import {merge} from 'lodash';

const localStorageKey = 'notes';

const setStateToStorage = (state, storageKey: string) => {
  localStorage.setItem(storageKey, JSON.stringify(state));
};

const getStateFromStorage = (storageKey: string): any => {
  return JSON.parse(localStorage.getItem(storageKey));
};

export function notesMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  let onInit = true;

  return ((state: S, action: A) => {
    const nextState = reducer(state, action);

    // Cuando se arranca la app, carga el state del local storage
    if (onInit) {
      onInit = false;
      const stateFromStorage = getStateFromStorage(localStorageKey);
      return merge(nextState, stateFromStorage);
    }

    // Durante el funcionamiento normal de la app, el meta reducer guarda el state en el local storage tras cada acción
    setStateToStorage(nextState, localStorageKey);
    return nextState;
  });
}
