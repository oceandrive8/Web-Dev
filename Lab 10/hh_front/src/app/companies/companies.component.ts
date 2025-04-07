import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  onCompanyClick(companyId: number): void {
    this.router.navigate(['/vacancies', companyId]);  
  } 
}




