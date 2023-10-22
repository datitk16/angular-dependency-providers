import { UseClass } from './models/useClass.model';
import { TOKEN } from './models/useValue.model';
import { User } from './app.module';
import { Token } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [
  //   UseClass
  // ]
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(TOKEN) private userValue: string,
    @Inject('UserClass') private useClass: UseClass
  ) {

  }

  ngOnInit(): void {
    console.log(this.userValue);

    // this.useClass.log()
    console.log(this.useClass.log())

  }
}
