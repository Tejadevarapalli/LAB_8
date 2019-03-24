import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name;
  public pwd;
  public token: any;
  constructor(private router: Router, private Http: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    if (this.name != null && this.pwd != null) {
      let user = {
        name: this.name,
        pwd: this.pwd
      }
      this.Http.post('http://localhost:3000/api/login', user).subscribe(data => {
        this.token = data;
        localStorage.setItem('authtoken', this.token);
        this.router.navigate(['/details']);
      });
    }
    else {
      alert('Please input the required details');
    }
  }
}
