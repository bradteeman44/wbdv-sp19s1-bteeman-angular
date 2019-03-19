import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonServiceClient
  ) { }

  moduleId: any;
  lessons: []
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.moduleId = params['moduleId'];
        this.lessonService.findLessonsForModule(params['moduleId'])
          .then(lessons => {
            this.lessons = lessons;
          });
      });
  }

}
