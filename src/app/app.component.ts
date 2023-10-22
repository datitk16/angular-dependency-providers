import { EmptyDialogMessage } from './services/empty-dialog-message.service';
import { UseClass } from './models/useClass.model';
import { TOKEN } from './models/useValue.model';
import { User } from './app.module';
import { Token } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { DIALOG_MESSAGE } from './models/dialog-message.model';
import { MatDialogModalService } from './services/mat-dialog-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: DIALOG_MESSAGE,
      useClass: MatDialogModalService
    },
  ]
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(TOKEN) private userValue: string,
    @Inject('UserClass') private useClass: UseClass,
    @Inject(DIALOG_MESSAGE) private emptyDialogMessage: EmptyDialogMessage,
    @Inject(DIALOG_MESSAGE) private matDialogModalService: MatDialogModalService
  ) {

  }

  ngOnInit(): void {
    // console.log(this.userValue);
    // console.log(this.useClass.log())

    // console.log(this.emptyDialogMessage.showErrorMessage('test'))

    console.log(this.matDialogModalService.showErrorMessage('test'))

  }
}
