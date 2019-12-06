import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/shared/training.service';
import { NgForm } from '@angular/forms';

import { DatePipe } from '@angular/common';

import { AppError } from 'src/app/shared/app-error';
import { BadInput } from 'src/app/shared/bad-inputs';


@Component({
  selector: 'app-traing-form',
  templateUrl: './traing-form.component.html',
  styleUrls: ['./traing-form.component.css']
})
export class TraingFormComponent implements OnInit {
  
 
  //Error Display
  error:any={isError:false,errorMessage:''};
  isValidDate:any;
  sdate:any;
  edate:any;
  diff:any;
  onClickSubmit(data)
  {
    debugger;
this.sdate=this.datePipe.transform(data.StartDate,"dd-MM-yyyy");
this.edate=this.datePipe.transform(data.EndDate,"dd-MM-yyyy");
this.diff=(this.sdate)-(this.edate);
    this.isValidDate = this.validateDates(this.sdate, this.edate);
    if(this.isValidDate)
    {
      this.service.create(data).subscribe(
        res=>{
          alert('Saved Successfully');
alert('No of days between Start date and End date is'+this.diff);
        },(error:AppError)=>{
          if(error instanceof BadInput)
          {
            alert('Bad request');
          }
          else throw error;
        }
      )
    }
  }
  validateDates(sDate: any, eDate: any){
    debugger;
    this.isValidDate = true;
    if((sDate == null || eDate ==null)){
      this.error={isError:true,errorMessage:'Start date and end date are required.'};
      this.isValidDate = false;
    }

    if((sDate != null && eDate !=null) && (eDate) < (sDate)){
      this.error={isError:true,errorMessage:'End date should be grater then start date.'};
      this.isValidDate = false;
      this.service.formData.EndDate='';
    }
    return this.isValidDate;
  }
  constructor(private service:TrainingService,private datePipe: DatePipe) { }

  ngOnInit() {
    debugger;
    this.resetForm();
    
  }
resetForm(form?:NgForm){
  debugger;
  if(form!=null)
  form.resetForm();
  this.service.formData={
    TrainingName:'',
    StartDate:'',
    EndDate:''
  }
  
 
  

  
  
  

  
}

}
