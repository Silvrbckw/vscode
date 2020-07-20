import { FilePickerActionTypes } from './store/actions';

export enum MESSAGE_TYPES {
  CONNECT = 'CONNECT',
  CONNECT_RESULT = 'CONNECT_RESULT',
  OPEN_CONNECTION_STRING_INPUT = 'OPEN_CONNECTION_STRING_INPUT',
  OPEN_FILE_PICKER = 'OPEN_FILE_PICKER',
  FILE_PICKER_RESULTS = 'FILE_PICKER_RESULTS',
  EXTENSION_LINK_CLICKED = 'EXTENSION_LINK_CLICKED',
  CHANGE_STREAM_EVENT = 'CHANGE_STREAM_EVENT'
}

export enum WEBVIEWS {
  CONNECT = 'CONNECT',
  CHANGE_STREAM = 'CHANGE_STREAM'
}

export const WEBVIEW_TYPE_GLOBAL_ID = '@@@WEBVIEW_TYPE_GLOBAL_ID@@@';

interface BasicWebviewMessage {
  command: string;
}

// Note: In the app this is tightly coupled with 'externals.ts'.
export interface ConnectMessage extends BasicWebviewMessage {
  command: MESSAGE_TYPES.CONNECT;
  connectionModel: any;
}

export interface ConnectResultsMessage extends BasicWebviewMessage {
  command: MESSAGE_TYPES.CONNECT_RESULT;
  connectionSuccess: boolean;
  connectionMessage: string;
}

export interface OpenConnectionStringInputMessage extends BasicWebviewMessage {
  command: MESSAGE_TYPES.OPEN_CONNECTION_STRING_INPUT;
}

// Note: In the app this is tightly coupled with 'externals.ts'.
export interface OpenFilePickerMessage extends BasicWebviewMessage {
  command: MESSAGE_TYPES.OPEN_FILE_PICKER;
  action: FilePickerActionTypes;
  multi: boolean;
}

export interface FilePickerResultsMessage extends BasicWebviewMessage {
  command: MESSAGE_TYPES.FILE_PICKER_RESULTS;
  action: FilePickerActionTypes;
  files: string[] | undefined;
}

export interface LinkClickedMessage extends BasicWebviewMessage {
  command: MESSAGE_TYPES.EXTENSION_LINK_CLICKED;
  screen: string;
  linkId: string;
}

export interface ChangeStreamEventMessage extends BasicWebviewMessage {
  command: MESSAGE_TYPES.CHANGE_STREAM_EVENT;
  changeStreamEvent: any;
}
