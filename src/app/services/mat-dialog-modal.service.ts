import { merge, Observable } from 'rxjs';

import { Injectable, OnDestroy } from '@angular/core';
import { IDialogMessage } from '../models/dialog-message.model';

@Injectable()
export class MatDialogModalService implements IDialogMessage, OnDestroy {

    constructor(
    ) { }

    ngOnDestroy() { }


    showInfoMessage(message: string, onOkHandler?: () => void): void {
    }

    showErrorMessage(message: string, onOkHandler?: () => void): void {
        console.log(message + ' Dat ')
    }

    showSuccessMessage(message: string, onOkHandler?: () => void): void {
    }

    showConfirmMessage(
        message: string,
        onOkHandler: () => void,
        onCancelHandler = () => { }
    ): void {
    }

    private showDialog(
        titleText: string,
        titleIcon: string,
        titleClass: string,
        messageText: string,
        onOkHandler: () => void,
        onCancelHandler?: () => void
    ): void {
    }
}
