import { Injectable } from '@angular/core';
import { TrainingService } from './training.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertTrainingDataService extends TrainingService {

  constructor(http:HttpClient) {
    debugger;
    super('http://localhost:56658/api/TrainingData',http);
   }
}
