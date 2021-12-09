import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';

import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  myForm: FormGroup;
  submitted = false;


  constructor(private studentService: StudentService, public fb:FormBuilder) { }

  ngOnInit() {
      this.myForm = this.fb.group({
        name:['',Validators.compose([Validators.required,Validators.minLength(6)])],
        controlNumber:['',Validators.compose([Validators.required])]
      });
  }


  //Metodo para guardar estudiantes
  saveStudent(){
    this.submitted = true;
    if(this.myForm.valid){
      this.studentService.newStudent({
        name:this.myForm.get('name').value,
        controlnumber: this.myForm.get('controlNumber').value,
        active: false
      });
    }

  }//saveStudent

}//class
