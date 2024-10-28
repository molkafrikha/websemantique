// src/app/components/health-activity/health-activity.component.ts
import { Component, OnInit } from '@angular/core';
import { HealthActivityService } from 'src/app/services/health-activity-service';
import { HealthActivity } from '../../models/health-activity';

@Component({
  selector: 'app-health-activity',
  templateUrl: './health-activity.component.html',
  styleUrls: ['./health-activity.component.scss']
})
export class HealthActivityComponent implements OnInit {
  healthActivities: HealthActivity[] = [];

  constructor(private healthActivityService: HealthActivityService) {}

  ngOnInit(): void {
    this.healthActivityService.getHealthActivities().subscribe(
      (data) => {
        this.healthActivities = data;
      },
      (error) => {
        console.error('Error fetching health activities:', error);
      }
    );
  }
}