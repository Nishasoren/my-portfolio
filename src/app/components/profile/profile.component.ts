import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("../../../assets/kumari_nisha_soren_resume(1).pdf", "_blank");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/kumari-nisha-soren-528a35123', '_blank');
  }

  // goToGithub() {
  //   window.open('https://github.com/SebastianoFazzino', '_blank');
  }

