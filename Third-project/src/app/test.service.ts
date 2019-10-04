import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  printToconsole(arg)
  {
    console.log(arg);
  }

  constructor() { }
}
