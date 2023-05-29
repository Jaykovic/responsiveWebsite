import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
nav: any;
mobileNav: any;

menuIcon: any;
closeIcon: any;
menuContainer: any;
  constructor() { }

  ngOnInit(): void {

    window.addEventListener("scroll", () =>{
       this.nav = document.querySelector("nav");
       this.mobileNav = document.querySelector("nav.mobile");
      if(window.pageYOffset > 60){
        this.nav.classList.add("scrolled");
        this.mobileNav.classList.add("scrolled");
      } else{
        this.nav.classList.remove("scrolled");
        this.mobileNav.classList.remove("scrolled");
      }
    });

    this.menuIcon = document.querySelector(".menu-icon");
    this.menuIcon.addEventListener("click", () =>{
      this.menuContainer = document.querySelector(".mobile-menu-container");
      this.menuContainer.classList.add("active");
    });

    this.closeIcon = document.querySelector(".mobile-menu-container .fa-solid");
    this.closeIcon.addEventListener("click", () => {
      this.menuContainer = document.querySelector(".mobile-menu-container");
      this.menuContainer.classList.remove("active");
    })
  }

}
