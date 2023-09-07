import { Component,OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit{
  studentList=new Array<Student>()
  constructor(private testService: TestService){}

ngOnInit(){
  this.testService.getAll().subscribe(response =>{
    this.studentList=response
    alert(this.studentList)
  })
}
}
