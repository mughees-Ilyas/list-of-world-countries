import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  toggle = false;

    constructor(private route: ActivatedRoute, private router: Router) {}
    /*
    * toggle nav bar on click.
     */
    onClick() {
      this.toggle=!this.toggle;
    }
  /*
   * navigate to user page to view all users
   */
  usersPage() {
    this.router.navigate(['/users']);
  }
  /*
   * navigate to user adding page to add new user
   */
  addUserPage() {
    this.router.navigate(['/users/user/new']);
  }
}
