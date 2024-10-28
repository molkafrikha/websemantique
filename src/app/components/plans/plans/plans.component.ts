import { Component, OnInit } from '@angular/core';
import { PlanService } from './../../../services/planService';
import { Plan } from '../../../models/plans';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit { // Implement OnInit
  plans: Plan[] = [];

  constructor(
    private planService: PlanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPlansByExpert();
  }

  getPlansByExpert(): void {
    this.planService.getPlansByExpert().subscribe(
      (data) => { // Remove the type here as it's handled in the service
        this.plans = data.entities; // Access the 'entities' array
      },
      (error) => {
        console.error('Erreur lors de la récupération des plans :', error);
      }
    );
  }
}
