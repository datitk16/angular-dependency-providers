import { InjectionToken } from '@angular/core';

export interface IDialogMessage {

  showInfoMessage(message: string, onOkHandler?: () => void): void;

  showErrorMessage(message: string, onOkHandler?: () => void): void;

  showConfirmMessage(msg: string, onOkHandler: () => void, onCancelHandler?: () => void): void;

  showSuccessMessage(message: string, onOkHandler?: () => void): void;
}

export const DIALOG_MESSAGE = new InjectionToken<IDialogMessage>('DialogMessage');
