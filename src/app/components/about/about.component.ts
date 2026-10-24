import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  // getExperienceYears(): number {
  //   const startDate = new Date(2022, 5); // June 2022
  //   const currentDate = new Date();
  //   const years = currentDate.getFullYear() - startDate.getFullYear();
  //   const m = currentDate.getMonth() - startDate.getMonth();
  //   return m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate()) ? years - 1 : years;
  // }
  getExperienceYears(): string {
    const startDate = new Date(2022, 5); // June 2022
    const currentDate = new Date();
  
    // Calculate the difference in years and months
    let experienceYears = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDifference = currentDate.getMonth() - startDate.getMonth();
  
    // Adjust the years if the current month is before the starting month
    if (monthsDifference < 0) {
      experienceYears--;
    }
  
    return experienceYears === 1 ? `${experienceYears} year of experience` : `${experienceYears} years of experience`;
  }
  
}
