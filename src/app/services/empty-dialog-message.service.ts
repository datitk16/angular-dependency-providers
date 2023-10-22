import { IDialogMessage } from './../models/dialog-message.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmptyDialogMessage implements IDialogMessage {
  showInfoMessage(message: string, onOkHandler?: () => void): void { }

  showErrorMessage(message: string, onOkHandler?: () => void): void { }

  showConfirmMessage(
    msg: string,
    onOkHandler: () => void,
    onCancelHandler?: () => void
  ): void { }

  showSuccessMessage(message: string, onOkHandler?: () => void): void { }
}
