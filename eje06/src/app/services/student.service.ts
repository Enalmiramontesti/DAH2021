import { Injectable } from '@angular/core';
import  {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private students : Student[] = new Array();

  constructor() {
      this.students.push({
        name: 'Enrique Alonso Miramontes Tiznado',
        controlnumber:'17401021',
        active: false
      });

      this.students.push({
        name: 'Lu, La chica que ilumina las estrellas',
        controlnumber:'17400992',
        active: true
      });

      this.students.push({
        name: 'Saymi Preciado',
        controlnumber:'17400455',
        active: true
      });

  }//constructor 


  //Metodo para reacuperar los estudiantes
  getStudents():Student[]{
    return this.students;
  }//getStudent


  //Metodo para cambiar el stado del estudiante
  changeStatus(position: number):void{
    this.students[position].active = !this.students[position].active;
  }//changeStatus

  //Metodo para eliminar un estudiante
  deleteStudent(positon: number): void{
    this.students.splice(positon, 1);
  }//deleteStudent
  
  newStudent(student: Student):void{
      this.students.push(student);
  }

}//class
