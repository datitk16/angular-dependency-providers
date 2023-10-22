import { UseClass } from './models/useClass.model';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TOKEN, USER_VALUE } from './models/useValue.model';


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
    {
      provide: 'UserClass',
      useClass: UseClass
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
