import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import {SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router,
    public socialAuthServive: SocialAuthService) { }

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }

  ngOnInit(): void {
  }


  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

}
