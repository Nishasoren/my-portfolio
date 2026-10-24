import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    // {name: "Java", src: "./assets/technologies/java.png"},
    // {name: "Spring Boot", src: "./assets/technologies/spring-boot.png"},
    // {name: "Kafka", src: "./assets/technologies/kafka.png"},
    // {name: "MySQL", src: "./assets/technologies/mysql.png"},
    // {name: "PostgreSQL", src: "./assets/technologies/postgresql.png"},
    // {name: "Redis", src: "./assets/technologies/redis.png"},
    // {name: "Javascript", src: "./assets/technologies/js.png"},
    // {name: "Typescript", src: "./assets/technologies/ts.png"},
    // {name: "Angular", src: "./assets/technologies/angular.png"},
    // {name: "React", src: "./assets/technologies/react.png"},
    // {name: "Next.js", src: "./assets/technologies/next.png"},
    // {name: "HTML", src: "./assets/technologies/html.png"},
    // {name: "CSS", src: "./assets/technologies/css.png"},
    // {name: "Bootstrap", src: "./assets/technologies/bootstrap.png"},
    // {name: "Kubernetes", src: "./assets/technologies/kubernetes.png"},
    // {name: "Docker", src: "./assets/technologies/docker.png"},
    // {name: "GCP", src: "./assets/technologies/gcp.png"},
    // {name: "GIT", src: "./assets/technologies/git.png"},


    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    {name: "Bootstrap", src: "./assets/technologies/bootstrap.png"},
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "C#", src: "../../../assets/technologies/Csharp.png"},
    {name: "SQL Server", src: "../../../assets/technologies/sql server.png"},
    {name: ".Net 6", src: "../../../assets/technologies/Dotnet6.png"},
    {name: ".Net 7", src: "../../../assets/technologies/Dotnet7.png"},
    {name: "ASP.NET Core 6.0", src: "../../../assets/technologies/asp.net core.png"},
    {name: "Dotnet Framework 4.8.1", src: "../../../assets/technologies/Dotnetframework.png"},
    {name: "LINQ", src: "../../../assets/technologies/linq.png"},
    {name: "Entity Framework", src: "../../../assets/technologies/EF.png"},
    {name: "Micro Services", src: "../../../assets/technologies/microservice.png"},
    {name: "Power BI", src: "../../../assets/technologies/PBI.png"},

  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}
