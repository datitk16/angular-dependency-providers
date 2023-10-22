import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  product() {
    return [
      { name: 'San phan a' },
      { name: 'San phan b' }
    ]
  }
}
