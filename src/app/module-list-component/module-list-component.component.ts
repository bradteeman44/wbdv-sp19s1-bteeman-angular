import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleServiceClient,
    private courseService: CourseServiceClient,
    private router: Router
  ) { }
  course: Course = new Course();
  modules: [];
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.courseService.findCourseById(params)
          .then(course => {
            this.course = course;
          });
        this.moduleService.findModulesForCourse(params)
          .then(modules => {
            this.modules = modules;
          });
      });
  }
  selectModule(moduleId): void {
    this.router.navigate(['course', this.course.id, 'module', moduleId, 'lesson']);
  }

}
