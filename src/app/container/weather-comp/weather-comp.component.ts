import { Component, OnInit } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-weather-comp',
  templateUrl: './weather-comp.component.html',
  styleUrls: ['./weather-comp.component.css']
})
export class WeatherCompComponent implements OnInit {
  //total
  arr :[];
  i : any;
 //for datePicker
  model: NgbDateStruct;

  // for dropdown
  celsius : boolean = false;
  fehr : boolean = false;


  

  constructor(private apiserv : ApiServiceService) { 
 
  }

   // for form 
   public weatherData: any;
   myForm  = new FormGroup({
     location: new FormControl(''),
   })
  ngOnInit(): void {
   

  }
  tempInCels(){
    this.celsius = true;
    this.fehr = false;
   }
 tempInFehr(){
  this.fehr = true;
  this.celsius = false
}
  
  // doGetTotal(){
  // this.apiserv.doGetTotal().subscribe((allData => {
  //   allData = this.arr
  //   console.log(this.arr)

  // }
  //   ))}



ngbDatepicker : any;


onDateSelect(e : any){
  console.log(e.Target.value)
}
onSubmit(formValues:any ) {
  this.apiserv.doGetOneCountry().subscribe(data => {
    this.weatherData = data;
    console.log(this.weatherData);
  });
 
}


}




