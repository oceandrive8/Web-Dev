import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models/vacancy';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
  imports: [CommonModule]
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId: number = 0;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyId = +params['companyId'];  
      this.loadVacancies(this.companyId);     
    });
  }

  loadVacancies(companyId: number): void {
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies.filter(vacancy => vacancy.company === companyId);
    });
  }

  
  navigateBack(): void {
    this.router.navigate(['/']); 
  }
}



