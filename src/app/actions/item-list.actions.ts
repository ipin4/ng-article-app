
import { Action } from '@ngrx/store';
import { Todos } from '../models/add-item';

export const CHANGE_STATUS = 'Change_Status';
export const CHANGE_TITLE = 'Change_Title';

export class OpenContentAction implements Action {
  readonly type = CHANGE_STATUS;

  constructor(public payload: Todos[], public index: number) {
    this.payload[this.index].isOpen = !this.payload[this.index].isOpen;
  }
}

export class ChangeTitleAction implements Action {
  readonly type = CHANGE_TITLE;

  constructor(public payload: Todos[], public index: number, public title: String, public content: String) {
    this.payload[this.index].title = this.title;
    this.payload[this.index].content = this.content;
  }
}

export type All = OpenContentAction | ChangeTitleAction;
