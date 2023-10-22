import { UseClass } from './models/useClass.model';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TOKEN, USER_VALUE } from './models/useValue.model';
import { DIALOG_MESSAGE } from './models/dialog-message.model';
import { EmptyDialogMessage } from './services/empty-dialog-message.service';
import { FictitiousLanguageTranslationService } from './services/fictitious-language-translation.service';
import { LanguageTranslationService } from './services/language-translation.service';


@Injectable()
export class User {
  name: string;
  age: number;
  constructor(params: User) {
    this.name = params.name;
    this.age = params.age;
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: TOKEN,
      useValue: USER_VALUE
    },
    // declare token with string
    {
      provide: 'UserClass',
      useClass: UseClass
    },
    // token with Interface
    {
      provide: DIALOG_MESSAGE,
      useClass: EmptyDialogMessage
    },
    LanguageTranslationService,
    // refer https://dev.to/angular/a-practical-guide-to-providers-in-angular-3c96
    {
      provide: FictitiousLanguageTranslationService,
      useExisting: LanguageTranslationService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
