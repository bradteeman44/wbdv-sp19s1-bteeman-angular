import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {Router} from '@angular/router';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-grid-component',
  templateUrl: './course-grid-component.component.html',
  styleUrls: ['./course-grid-component.component.css']
})
export class CourseGridComponentComponent implements OnInit {

  constructor(
    private service: CourseServiceClient,
    private router: Router
  ) { }

  courses: Course [];
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }
  selectCourse(courseId): void {
    this.router.navigate(['course', courseId, 'module']);
  }

}
