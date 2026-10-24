import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/kumari-nisha-soren-528a35123', '_blank');
  }

  get email(): string {
    return 'nishasoren1996@gmail.com';
  }
}
