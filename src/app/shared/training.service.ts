import { Injectable } from '@angular/core';
import { TraingDetail } from './traing-detail.model';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { AppError } from '../shared/app-error';
import {NotFoundError} from '../shared/Not-found-error';
import { BadInput } from '../shared/bad-inputs';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  formData:TraingDetail
  constructor(private url:string,private http:HttpClient) { }

  getAll()
    {
        debugger;
        return this.http.get(this.url)
        .pipe(map(response=>response));
    }
    getByID(id)
    {
        debugger;
      return this.http.get(this.url +'/'+id)
      .pipe(map(response=>response));
    }
    create(formData:TraingDetail)
    {
        debugger;
        return this.http.post(this.url,formData)
        .pipe(map(response=>response),catchError(this.handleerror));
    }
    update(resource)
    {
      debugger
      return this.http.put(this.url+'/'+resource.id,resource)
      .pipe(map(response=>response));;
    }
    Delete(id)
    {
      return this.http.delete(this.url + '/' + id)
      .pipe(map(response=>response),catchError(this.handleerror)); 
    }

    private handleerror(error:Response)
    {
      if(error.status===404)
  return Observable.throw(new NotFoundError());
      if(error.status===400)
  return Observable.throw(new BadInput(error.json()));
  return Observable.throw(new AppError(error.json()));
  
  
    }
}
