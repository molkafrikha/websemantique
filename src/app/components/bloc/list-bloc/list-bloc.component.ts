import { WeatherService } from './../../../services/weather.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/models/bloc';
import { activitysectore } from 'src/app/models/activitySector';
import { FormBuilder } from '@angular/forms';
import { ActivityService } from '../../../services/activitysectore.service'

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent implements OnInit {



  selectionnerEstimation(tache: { nom: string, estimation: number }, estimation: number) {
    tache.estimation = estimation;
  }


  Activity: activitysectore[] = [];
  weatherData: any;

  constructor(private ActivityService : ActivityService,  private Router: Router ) {}

  ngOnInit(): void {
    this.getBlocs();
    
  }

  getBlocs(): void {
    this.ActivityService.getBlocs()
      .subscribe(blocs => this.Activity = blocs);
  }

  

}
