import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@Angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Third-project';

  constructor(private svc:TestService,private http:HttpClient)
  {
svc.printToconsole("got the service");
  }

  ngOnInit()
  {
    let obs=this.http.get("https://api.github.com/users/koushikkothagal");
    obs.subscribe((response)=>console.log(response));
  }
}
