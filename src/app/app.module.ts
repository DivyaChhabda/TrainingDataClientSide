import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TraingFormComponent } from './TrainingDetail/traing-form/traing-form.component';

import { TrainingService } from './shared/training.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule,MatInputModule ,MatNativeDateModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AppErrorhandler } from './shared/app-error-handler';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
    TrainingDetailComponent,
    TraingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatInputModule,MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [TrainingService,DatePipe,{provide:ErrorHandler,useClass:AppErrorhandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
