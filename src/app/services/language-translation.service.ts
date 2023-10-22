import { Injectable } from '@angular/core';

@Injectable()
export class LanguageTranslationService {

  public french(text: string) {
    console.log(text + ' This is French language ')
  }
  public japanese(text: string) {
    console.log(text + ' This is Japanese language ')
  }
  public elvish(text: string) {
    console.log(text + ' This is Elvish language ')
  }
  public klingon(text: string) {
    console.log(text + ' This is Klingon language ')
  }
  // so on and so forth, but you see the problem here

}
