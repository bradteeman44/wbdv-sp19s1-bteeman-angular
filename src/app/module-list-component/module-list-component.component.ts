import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ModuleServiceClient,
    private router: Router
  ) { }
  courseId: string;
  modules: [];
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.courseId = params['courseId'];
        this.service.findModulesForCourse(this.courseId)
          .then(modules => {
            this.modules = modules;
          });
      });
  }
  selectModule(moduleId): void {
    this.router.navigate(['course', this.courseId, 'module', moduleId, 'lesson']);
  }

}
