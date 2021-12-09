import { Component } from '@angular/core';
import {Student} from '../models/student';
import {StudentService} from '../services/student.service';
import { AlertController } from '@ionic/angular'; 
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  students: Student[] = new Array();
  search: String;


  constructor(private studentService:StudentService, private alert:AlertController,private router:Router) {
    this.getAll();
  }//costructor

  operation(pos:number, ev): void{
    if(ev.detail.side === 'start'){
      this.studentService.changeStatus(pos);
    }else{
      this.showAlert(pos);
    } 
  }

  async showAlert(pos:number){
    const al = await this.alert.create({
      header: 'Confirmar',
      message: 'Seguro que desea eliminar?',
      buttons: [{
          text: 'No'
      },{
          text: 'Si',
          handler: () =>{
            this.studentService.deleteStudent(pos);
            this.filter();
          }
      }] 
    });
   await al.present();

  }


  filter():void{
    this.getAll();
    if(this.search && this.search.trim())
    this.students = this.students.filter((student)=>{
      return (student.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
    });
  }

  getAll():void{
    this.students = this.studentService.getStudents();

  }

  newStudent(){
    this.router.navigate(['/new-student']);
  }

}//class
