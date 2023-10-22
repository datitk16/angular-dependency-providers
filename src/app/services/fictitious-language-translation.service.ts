import { Injectable } from '@angular/core';

@Injectable()
export abstract class FictitiousLanguageTranslationService {

  abstract elvish: (text: string) => void;
  abstract klingon: (text: string) => void;
}
